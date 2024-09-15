import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.js";

import { sendOtpEmail } from "../utils/mailer.js";
dotenv.config();

const generateOtp = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

// signup function to create user account
export const signup = async (req, res) => {
  const { email } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser && existingUser.isVerified) {
      return res.status(400).json({ message: "User already registered." });
    }
    const otp = generateOtp();
    await sendOtpEmail(email, otp);
    if (!existingUser) {
      await new User({ email, otp }).save();
    } else {
      existingUser.otp = otp;
      await existingUser.save();
    }

    return res.status(200).json({ message: "OTP sent to your email." });
  } catch (err) {
    return res.status(500).json({ message: "Error sending OTP", error: err });
  }
};

export const verifyOtp = async (req, res) => {
  const { email, otp, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || Number(user.otp) !== Number(otp)) {
      return res.status(400).json({ message: "Invalid OTP." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.isVerified = true;
    user.otp = undefined;
    await user.save();

    return res.status(200).json({ message: "Signup successful" });
  } catch (err) {
    return res.status(500).json({ message: "Error verifying OTP", error: err });
  }
};

// Login: Verify password and issue JWT
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !user.isVerified) {
      return res
        .status(400)
        .json({ message: "Invalid email or user not verified." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password." });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );
    return res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    return res.status(500).json({ message: "Error logging in", error: err });
  }
};
