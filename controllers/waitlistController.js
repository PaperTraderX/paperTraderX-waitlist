import validator from "validator";
import { v4 as uuidv4 } from "uuid";
import WaitListUser from "../models/waitlist-users.js";
import { emailQueue } from "../lib/queue.js";

export const addToWaitlist = async (req, res) => {
  const { userName, email, source, referralId: referrerId } = req.body;

  if (!email || !validator.isEmail(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  if (!userName || userName.length < 2) {
    return res.status(400).json({ error: "Invalid username" });
  }

  try {
    const existing = await WaitListUser.findOne({ email });
    if (existing) {
      return res.status(409).json({ error: "Email already exists" });
    }

    if (referrerId) {
      const referrer = await WaitListUser.findOneAndUpdate(
        { referralId: referrerId },
        { $inc: { referralCount: 1 } },
        { new: true }
      );

      if (referrer) {
        await emailQueue.add("referralEmail", {
          to: referrer.email,
          type: "referral",
          userName: referrer.userName,
          referralCount: referrer.referralCount,
        });
      }
    }

    const newReferralId = uuidv4();

    const newUser = await WaitListUser.create({
      userName,
      email,
      source,
      referralId: newReferralId,
    });
    await emailQueue.add("welcomeEmail", {
      to: newUser.email,
      type: "welcome",
      userName: newUser.userName,
    });

    const count = await WaitListUser.countDocuments();

    res.status(201).json({
      message: `Hi ${userName}! You're on the waitlist! Your current position is #${count}`,
      referralId: newUser.referralId,
      referralLink: `https://paperxtrader.com/?ref=${newUser.referralId}`,
      referralCount: newUser.referralCount,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getReferralStats = async (req, res) => {
  const { referralId } = req.params;

  try {
    const user = await WaitListUser.findOne({ referralId });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const referralLink = `https://paperxtrader.com/?ref=${referralId}`;
    res.status(200).json({
      userName: user.userName,
      email: user.email,
      referralCount: user.referralCount,
      referralLink
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
