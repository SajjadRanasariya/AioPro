import express from "express";
import { validateSignup, validateSignin } from "./../middlewares/validator";
import User from "./../models/user";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { sendMail } from "./../middlewares/sendMail";
import jwt_decode from "jwt-decode";
import { upload } from "../utils/upload";
dotenv.config();

const router = express.Router();

router.post("/signup", upload.single("avatar"), async (req, res) => {
  const reqUser = req.body;

  // Validation
  const { errors, isValid } = validateSignup(reqUser);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  //Create a new user in the db
  try {
    let url = req.protocol + "://" + req.get("host");

    const user = await User.findOne({ email: reqUser.email });
    if (user) {
      return res.status(400).json({ error: "Email already exists" });
    }

    function generateEmployeeCode(name) {
      const randomCode = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit number
      const employeeCode = `${name.toUpperCase().slice(0, 3)}${randomCode}`;
      return employeeCode;
    }

    const newUser = await new User({
      avatar: req.file ? `${url}/public/${req.file.filename}` : "",
      url: reqUser.url,
      firstName: reqUser.firstName,
      lastName: reqUser.lastName,
      email: reqUser.email,
      role: reqUser.role,
      parentId: reqUser.parentId,
      password: reqUser.password,
      status: reqUser.status,
      modifiedAt: reqUser.modifiedAt,
      employeId: generateEmployeeCode(reqUser.firstName),
    });
    newUser.password = newUser.encryptPassword(reqUser.password);
    await newUser.save();
    // Create and send the JWT token
    jwt.sign(
      { email: newUser.email },
      process.env.SECRET_KEY,
      {
        expiresIn: 31556926, // 1 year in seconds
      },
      (err, token) => {
        res.send({
          token: token,
          userData: {
            id: newUser._id,
            role: newUser.role,
            status: newUser.status,
          },
        });
        const link = `${process.env.BASE_URL}/email-verification/${token}`;
        // sendMail("registration_Confirm_Email_Template", newUser.email);
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.toString() });
  }
});

router.post("/login", async (req, res) => {
  const reqUser = req.body;

  // Validation
  const { errors, isValid } = validateSignin(reqUser);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const value = reqUser.login;
  const password = reqUser.password;

  // Find user
  try {
    // const user = await User.findOne({ employeId:value });
    const user = await User.findOne({
      $or: [{ email: value }, { employeId: value }],
    });
    if (!user) return res.status(401).json({ message: "Email not found" });
    if (!user.validPassword(password))
      return res.status(400).json({ message: "Incorrect password" });
    if (user.status === "deactive")
      return res.status(401).json({ message: "please verify your account" });

    // Create and send the JWT token
    jwt.sign(
      { email: user.email },
      process.env.SECRET_KEY,
      { 
        expiresIn: 31556926, // 1 year in seconds
      },
      (err, token) => {
        res.send({
          token: token,
          userData: {
            id: user._id,
            role: user.role,
            userName: user.firstName,
            avatar: user.avatar,
            parentID: user.parentId,
          },
        });
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.toString() });
  }
});

router.put("/verifyEmail", async (req, res) => {
  const { token, status } = req.body;
  const decoded = jwt_decode(token);
  const email = decoded.email;

  const findUser = await User.findOne({ email });
  if (!findUser) {
    res.status(404);
    return res.json({ message: "the email provided was not found" });
  } else if (findUser) {
    findUser.status = status;
    const userDetail = await User.findByIdAndUpdate(findUser._id, findUser);
    return res.json(userDetail);
  } else {
    res.status(500);
    return res.json({ message: "Internal Server Error" });
  }
});

router.post("/forgotPassword/sendMails", async (req, res) => {
  const { email } = req.body;
  const findUser = await User.findOne({ email });

  if (!findUser) {
    res.status(404);
    return res.json({ message: "Email provided was not found" });
  } else if (findUser) {
    jwt.sign(
      { email },
      process.env.SECRET_KEY,
      {
        expiresIn: 1800, // 30 minute in seconds
      },
      (err, token) => {
        const link = `${process.env.BASE_URL}/forgot-password/${token}`;
        sendMail("forgot_Password_Template", { email: email, link: link ,subject:'forgot password'});
        res.send("password reset link sent to your email account");
      }
    );
  } else {
    res.status(500);
    return res.json({ message: "Internal Server Error" });
  }
});

router.put("/forgotPassword", async (req, res) => {
  const { token, password, confirmPassword } = req.body;
  const decoded = jwt_decode(token);
  const email = decoded.email;
  const findUser = await User.findOne({ email });
  if (!findUser) {
    res.status(404);
    return res.json({ message: "the email provided was not found" });
  } else if (findUser) {
    if (password === confirmPassword) {
      findUser.password = findUser.encryptPassword(password);
      const userDetail = await User.findByIdAndUpdate(findUser._id, findUser);
      return res.json(userDetail);
    }
  } else {
    res.status(500);
    return res.json({ message: "Internal Server Error" });
  }
});

export default router;
