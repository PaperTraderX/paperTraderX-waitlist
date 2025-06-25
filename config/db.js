import mongoose from "mongoose";
import logger from "../utils/logger.js";

let _isConnected = false;

export async function connect() {
  if (_isConnected) {
    logger.info("MongoDB already connected.");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    _isConnected = true;
    logger.info("MongoDB connection successful.");
  } catch (err) {
    logger.error("MongoDB connection failed", err);
    throw err;
  }
}
