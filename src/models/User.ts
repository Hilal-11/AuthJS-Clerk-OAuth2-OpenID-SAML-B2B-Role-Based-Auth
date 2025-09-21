import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstname: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    role: { type: String, default: 'user' },
    image: { type: String },
    authProvider: { type: String} // github and google providers

}, { timestamps: true });   

export const User = mongoose.models?.User || mongoose.model("User", UserSchema);