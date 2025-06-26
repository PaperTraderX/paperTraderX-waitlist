import mongoose from "mongoose";

const EmailLogSchema = new mongoose.Schema({
  email: String,
  type: { type: String },
  status: { type: String, enum: ["sent", "failed"], default: "sent" },
  error: String,
  meta: mongoose.Schema.Types.Mixed,
  createdAt: { type: Date, default: Date.now }
});

const EmailLog = mongoose.model("EmailLog", EmailLogSchema);
export default EmailLog;
