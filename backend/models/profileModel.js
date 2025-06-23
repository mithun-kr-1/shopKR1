import express from "express";
import userModel from "../models/userModel.js";

const router = express.Router();

router.get("/profile", async (req, res) => {
  try {
    const token = req.headers.token; // Ensure token is passed in headers
    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    // Decode token to get user ID (assuming JWT is used)
    const userId = decodeToken(token); // Replace with your token decoding logic

    // Fetch user data from the database
    const user = await userModel.findById(userId).select("-password"); // Exclude password
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, profile: user });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;