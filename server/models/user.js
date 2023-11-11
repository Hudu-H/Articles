import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { String },
  id: { type: String },
});

export default mongoose.model("User", userSchema);
