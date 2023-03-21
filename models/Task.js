// import mongoose from "mongoose";

// const taskSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: String,
//   createdBy: String,
//   status: { type: String, required: true },
//   createdAt: {
//     type: Date,
//     default: new Date(),
//   },
// });

// export default mongoose.models.Task || mongoose.model("Task", taskSchema);

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
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"], // You can set the priority values as an enum
    default: "Medium",
  },
  board: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Board",
    required: true,
  },
});

export default mongoose.models.Task || mongoose.model("Task", taskSchema);
