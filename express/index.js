const express = require("express");
const app = express();
const port = 3000;
const dotenv = require("dotenv");

dotenv.config();

const postRoutes = require("./routes/postRoutes");
const authRoutes = require("./routes/authRoutes");

// session id, jwt

/**
 * session id
 * client -> server
 * server will store user info on the server side
 *        <- session id
 * client can send requests with session id
 * server will verify the user with session id by doing a lookup
 *        <- response
 *
 * jwt
 * client -> server
 * server will create jwt for user
 *        <- jwt
 * client can send requests with jwt
 * server will decrypt jwt to get user info, use the info to verify the user
 *        <-response
 */

// global middleware
app.use((req, res, next) => {
  console.log("middleware...");
  next();
});

app.use((req, res, next) => {
  console.log("middleware2...");
  next();
});

app.use(express.json());
// middlesware will only be applied to /path
app.use("/post", postRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
