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
    subject = "🎉 You Got a New Referral!";
    html = `
      <p>Hi <strong>${userName}</strong>,</p>
      <p>Someone just joined the waitlist using your referral link!</p>
      <p>You've now referred <strong>${referralCount}</strong> people. 🚀</p>
    `;
  }

  if (type === "welcome") {
    subject = "👋 Welcome to the PaperTraderX Waitlist!";
    html = `
      <p>Hi <strong>${userName}</strong>,</p>
      <p>Thanks for joining the waitlist. We'll notify you as we roll out access.</p>
      <p>Stay tuned and don't forget to share your referral link to skip the line!</p>
    `;
  }

  await transporter.sendMail({
    from: `"PaperTraderX" <${process.env.MAIL_USER}>`,
    to,
    subject,
    html
  });
};
