import helmet from "helmet";
import cors from "cors";
import express from "express";
import logger from "./utils/logger.js";
import { connect } from "./config/db.js";
import userRoute from "./routes/waitlistRoute.js";
import internalRoute from "./routes/internalRoute.js";
import { apiRateLimiter } from "./utils/rateLimiter.js";

function initMiddlewares(app) {
  app.use(helmet());
  app.use(cors({ origin: process.env.CORS_ORIGIN }));
  app.use(express.json());
  app.use("/api", apiRateLimiter);
}

function initRoutes(app) {
  app.use("/internal", internalRoute);
  app.use("/api/waitlist-user", userRoute);
}

export async function bootstrap(app) {
  initMiddlewares(app);
  initRoutes(app);

  try {
    await connect();
    logger.info("MongoDB connected");
    app.listen(process.env.PORT, () =>
      logger.info(`Server running on port ${process.env.PORT}`)
    );
  } catch (err) {
    logger.error(`${err}, MongoDB connection error`);
    process.exit(1);
  }
}
