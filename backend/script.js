const express = require("express");
const { Usermodel } = require("./db");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const cors= require('cors')
mongoose.connect("mongodb+srv://kavanp7:FiAsPfUrGqFcFk8p@cluster0.xdxul.mongodb.net/Temp");

const JWT_SECRET = "asisdvn";

const app = express();
app.use(express.json());
app.use(cors())


app.post("/signup", async function (req, res) {
  const requirebody = z.object({
    email: z.string(),
    password: z.string(),
  });

  const parsedDataWithSecc = requirebody.safeParse(req.body);

  if (!parsedDataWithSecc.success) {
    res.json({
      msg: "Format is wrong",
      err: parsedDataWithSecc.error,
    });
    return;
  }

  const { email, password } = req.body;

  try {
    const hashpasswd = await bcrypt.hash(password, 5);
    await Usermodel.create({
      email: email,
      password: hashpasswd,
    });

    res.json({
      message: "You are signed up",
    });
  } catch (e) {
    res.json({
      msg: "User already exists",
    });
  }
});

app.post("/login", async function (req, res) {
  const { email, password } = req.body;

  const response = await Usermodel.findOne({
    email: email,
  });

  if (!response) {
    res.status(403).json({
      message: "Incorrect creds",
    });
    return;
  }

  const passmatch = await bcrypt.compare(password, response.password);

  if (passmatch) {
    const token = jwt.sign(
      {
        id: response._id.toString(),
      },
      JWT_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect creds",
    });
  }
});

app.post("/todo", function (req, res) {
  res.json({
    message: "Endpoint under construction",
  });
});

app.get("/todos", function (req, res) {
  res.json({
    message: "Endpoint under construction",
  });
});

app.listen(3000);
