import "dotenv/config";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

export const sendEmail = async ({ to, type, userName, referralCount }) => {
  let subject, html;

  if (type === "referral") {
    subject = "🚀 You’ve Earned a New Referral!";
    html = `
      <p>Hey <strong>${userName}</strong>! 🙌</p>
      <p>Someone just signed up using your referral link, nice work! 🥳</p>
      <p>You’ve now referred <strong>${referralCount}</strong> awesome people. Keep going and climb the leaderboard! 🔥</p>
      <p>💡 Tip: The more you refer, the sooner you’ll get early access to PaperTraderX.</p>
      <p>Thanks for spreading the word! 🙏</p>
    `;
  }

  if (type === "welcome") {
    subject = "🎉 Welcome to PaperTraderX – You're In!";
    html = `
      <p>Hi <strong>${userName}</strong> 👋</p>
      <p>We’re thrilled to have you on the PaperTraderX waitlist!</p>
      <p>You're officially in line to explore risk-free trading with real market data. 🧠💰</p>
      <p>🚀 Want to get early access? Share your unique referral link and invite friends—every referral moves you up!</p>
      <p>We’ll keep you updated. Until then, get ready to level up your trading game. 🎯</p>
      <p>Cheers,<br>The PaperTraderX Team</p>
    `;
  }

  await transporter.sendMail({
    from: `"PaperTraderX" <${process.env.MAIL_USER}>`,
    to,
    subject,
    html
  });
};
