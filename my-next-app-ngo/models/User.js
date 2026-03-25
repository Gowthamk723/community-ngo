import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // ensure email uniqueness
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["NGO", "Innovator", "Donor", "Mentor", "Community"], // allowed roles
      default: "NGO", // default role if none selected
      required: true,
    },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;