import mongoose from "mongoose";

const pandithSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  address: { type: String, required: true },
  department: { type: String, required: true },
  specialization: { type: String, required: true },
  experience: { type: Number, required: true },
  feePerConsultation: { type: Number, required: true },
  timings: { type: [String], required: true },
  status: { type: String, default: "pending" },
}, { timestamps: true });

export default mongoose.model("Pandith", pandithSchema);