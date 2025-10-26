const express = require("express");
const userModel = require("../models/db.model");
const jwt = require("jsonwebtoken");

const router = express.Router();
router.use(express.json());
router.post("/register", async (req, res) => {
  const { user, password } = req.body;

  const users = await userModel.create({
    user,
    password,
  });
  console.log(users);
  
  const token = jwt.sign(
    {
      id: users._id,
    },
    process.env.JWT_SECRET
  );
  res.cookie('token',token)
  res.status(201).json({
    message: "user Registered!",
    users,
  });
});

router.post("/login", async (req, res) => {
  const { user, password } = req.body;

  const userExist = await userModel.findOne({
    user: user,
  });

  if (!userExist) {
    return res.status(401).json({
      message: "User is Invailid!",
    });
  }
  const passwordVailid = password == userExist.password;
  if (!passwordVailid) {
    return res.status(401).json({
      message: "Enter vailid password",
    });
  }

  res.status(201).json({
    message: "HEY welcome back!",
  });
});


router.get("/user", async (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User data fetched successfully!",
      user,
    });
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
});

router.get('/logout', (req,res)=>{
  res.clearCookie('token')

  res.status(200).json({
    message:'logout succefully!'
  })
})

module.exports = router;
