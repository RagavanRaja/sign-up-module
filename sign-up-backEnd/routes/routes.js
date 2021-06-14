const express = require("express");
const router = express.Router();
const SignUPModel = require("../models/model");

router.post("/sign-up", (req, res) => {
  const SignUp = new SignUPModel({
    fullName: req.body.fullName,
    userName: req.body.userName,
    email: req.body.fullName,
    password: req.body.fullName,
  });
  SignUp.save()
  .then(data=>res.json(data))
  .catch(err=>res.json(err))
});
module.exports = router;
