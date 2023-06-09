const router = require("express").Router();
const jwt = require("jsonwebtoken");

const users = [];
let id = 1;

router.post("/register", (req, res) => {
  const newUser = {
    username: req.body.username,
    password: req.body.password,
    userId: id,
  };
  id += 1;

  users.push(newUser);
  res.status(200).send("success");
});

router.post("/login", (req, res) => {
  const user = users.find((user) => {
    return user.username === req.body.username;
  });
  if (!user) {
    res.status(401).send("Wrong username or password");
    return;
  }
  if (user.password !== req.body.password) {
    res.status(401).send("Wrong username or password");
    return;
  }

  const accessToken = jwt.sign(
    {
      userId: user.userId,
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "15s",
    }
  );

  res.status(200).send({ accessToken });
});

module.exports = router;
