import { Worker } from "bullmq";
import { sendEmail } from "../utils/mailer.js";
import EmailLog from "../models/email-log.js";
import "dotenv/config";

export const emailWorker = new Worker(
  "emailQueue",
  async job => {
    console.log(`[Worker] Job received: ${job.name}`);
    const { to, type, userName, referralCount } = job.data;

    try {
      await sendEmail({ to, type, userName, referralCount });
      await EmailLog.create({
        email: to,
        type,
        status: "sent",
        meta: { userName, referralCount }
      });
      console.log(`[Worker] Email sent to ${to}`);
    } catch (err) {
      await EmailLog.create({
        email: to,
        type,
        status: "failed",
        error: err.message,
        meta: { userName, referralCount }
      });
      console.error(`[Worker] Failed to send email to ${to}`, err.message);
      throw err;
    }
  },
  {
    connection: {
      url: process.env.REDIS_URL || "redis://localhost:6379"
    },
    attempts: 3,
    backoff: { type: "exponential", delay: 5000 }
  }
);
