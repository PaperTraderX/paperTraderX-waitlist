import express from "express";
import { addToWaitlist, getReferralStats } from "../controllers/waitlistController.js";

const router = express.Router();
router.post("/", addToWaitlist);
router.get("/:referralId", getReferralStats);

export default router;
