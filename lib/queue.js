import { Queue } from "bullmq";

const redisUrl = process.env.REDIS_URL || "redis://localhost:6379";

export const emailQueue = new Queue("emailQueue", {
  connection: {
    url: redisUrl
  }
});
