import express from "express";
import * as Models from "../models/index.js";
import logger from "../utils/logger.js";

const router = express.Router();

router.post("/dbsync", async (req, res) => {
  const { modelName, methodName, args = [] } = req.body;

  const apiKey = req.headers["x-internal-key"];
  if (apiKey !== process.env.INTERNAL_API_KEY) {
    return res.status(403).json({ error: "Unauthorized access" });
  }

  try {
    if (!modelName || !methodName) {
      return res.status(400).json({ error: "modelName and methodName are required" });
    }

    const model = Models[modelName];
    if (!model) {
      return res.status(400).json({ error: `Unknown model: ${modelName}` });
    }

    if (typeof model[methodName] !== "function") {
      return res.status(400).json({ error: `Unknown method: ${methodName} on model ${modelName}` });
    }

    const result = await model[methodName](...args);
    res.status(200).json({ result });
  } catch (err) {
    logger.error("DBSYNC ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
