import User from "../models/user.model.js";
import asyncHandler from "express-async-handler";
import generateToken from "../util/generateToken.js";

// REGISTER USER
// ROUTE POST /API/V1/AUTH/REGISTER
// @ACCESS PUBLIC

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invali user data");
  }
});

// LOGIN USER
// ROUTE POST /API/V1/AUTH/LOGIN
// @ACCESS PUBLIC

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid login details");
  }
});

// LOGOUT USER
// ROUTE POST /API/V1/AUTH/LOGOUT
// @ACCESS PUBLIC

const logOut = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logout succedeed" });
});

export { logOut, loginUser, registerUser };