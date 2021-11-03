const { Router } = require("express");
const jwt = require("jsonwebtoken");

const {
  jwt: { secret_key },
} = require("./config");

const router = Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email)
    return res.status(400).json({
      ok: false,
      message: "email is required",
    });

  if (!password)
    return res.status(400).json({
      ok: false,
      message: "password is required",
    });

  const token = jwt.sign({ email }, secret_key || "DSFLDSF324324@44J--?fds2");

  return res.status(200).json({
    ok: true,
    user: email,
    token,
  });
});

module.exports = router;
