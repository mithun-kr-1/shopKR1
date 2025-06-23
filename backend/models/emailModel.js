import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  subscribedAt: { type: Date, default: Date.now },
});

const Email = mongoose.model("Email", emailSchema);
export default Email;