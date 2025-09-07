const { Router } = require("express");
const { userModel, purchaseModel } = require("../db");
const { z } = require("zod");
const { testHash } = require("./bcrypt");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userMiddleware = require("../middlewares/user");
const { JWT_USER_SECRET } = require("../config");

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  const requirebody = z.object({
    email: z.string(),
    password: z.string(),
    firstName: z.string(),
    lastName: z.string(),
  });

  const parsedDataWithSecc = requirebody.safeParse(req.body);

  if (!parsedDataWithSecc.success) {
    res.json({
      msg: "Format is wrong",
      err: parsedDataWithSecc.error,
    });
    return;
  }

  const { email, password, firstName, lastName } = req.body;

  try {
    const hashpasswd = await testHash({ password });

    await userModel.create({
      email,
      password: hashpasswd,
      firstName,
      lastName,
    });

    res.json({
      message: "You are signed up",
    });
  } catch (e) {
    console.error("Error is occurring:", e.message || e);
    res.json({
      msg: "An error occurred",
    });
  }
});

userRouter.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const verify = await userModel.findOne({ email }); 

    if (!verify) {
      res.status(404).json({ msg: "User not found" });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, verify.password);

    if (isPasswordValid) {
      const token = jwt.sign({ id: verify._id.toString() }, JWT_USER_SECRET);

      res.status(200).json({ token });
    } else {
      res.status(401).json({ msg: "Invalid credentials" });
    }
  } catch (e) {
    console.error("Error during sign in:", e);
    res.status(500).json({ msg: "Error in sign in" });
  }
});

userRouter.get("/purchased", userMiddleware, async (req, res) => {
  const userId = req.userId;

  const purchases = await purchaseModel.find({
    userId,
  });
const username = await userModel.findOne({_id:userId});
const name = username.firstName;
    res.json({
    msg: `Purchased courses by ${name}`,
    purchases
  });
});

module.exports = {
  userRouter: userRouter,
};
