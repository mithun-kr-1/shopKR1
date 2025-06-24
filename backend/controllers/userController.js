import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Route for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const emailNormalized = email.trim().toLowerCase();
    console.log('Login attempt:', { emailRaw: email, emailNormalized, password });
    // check if the user is not exist
    const user = await userModel.findOne({ email: emailNormalized });
    console.log('User found:', user);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    console.log('Comparing password:', password, 'with hash:', user.password);
    const isMatched = await bcrypt.compare(password, user.password);
    console.log('Password match:', isMatched);
    if (!isMatched) {
      return res.json({
        success: false,
        message: "Invalid credentials",
      });
    }
    const token = createToken(user._id);
    res.json({ success: true, message: "User credentials are correct", token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Route for user registration
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const emailNormalized = email.trim().toLowerCase();
    // checking for user if already registered
    const exists = await userModel.findOne({ email: emailNormalized });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }
    // validating email format and strong password
    if (!validator.isEmail(emailNormalized)) {
      return res.json({
        success: false,
        message: "Please Enter a valid Email",
      });
    }
    if (password.length < 5) {
      return res.json({
        success: false,
        message:
          "Password Length must be greater than or equal to 8 characters",
      });
    }

    // Hasing User Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Creating new user
    const newUser = new userModel({
      name,
      email: emailNormalized,
      password: hashedPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id);

    res.json({
      success: true,
      message: "User registered successfully",
      token,
    });

    console.log("New User Added")

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Route for admin login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token: token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { loginUser, registerUser, adminLogin };
