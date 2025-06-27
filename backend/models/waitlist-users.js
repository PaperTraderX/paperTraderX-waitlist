import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const WaitListUserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  source: { type: String, default: "website" },
  userName: { type: String, default: "" },
  referralId: { type: String, default: () => uuidv4() },
  referralCount: { type: Number, default: 0 }
}, { timestamps: true });

const WaitListUser = mongoose.model("WaitListUser", WaitListUserSchema);
export default WaitListUser;
