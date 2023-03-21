import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  createdBy: String,
  status: { type: String, required: true },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.models.Task || mongoose.model("Task", taskSchema);
