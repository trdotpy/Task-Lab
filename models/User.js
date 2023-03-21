import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String },
  boards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Board" }],
});

export default mongoose.models.User || mongoose.model("User", userSchema);
