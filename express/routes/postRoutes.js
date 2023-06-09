const router = require("express").Router();
const jwt = require("jsonwebtoken");

/**
 * get posts
 * make a post
 * delete a post
 */

const posts = [
  {
    id: 1,
    content: "first post",
    userId: "1",
  },
  {
    id: 2,
    content: "second post",
    userId: "1",
  },
  {
    id: 3,
    content: "third post",
    userId: "1",
  },
  {
    id: 4,
    content: "fourth post",
    userId: "2",
  },
];

router.get("/", (req, res) => {
  res.json(posts);
});

router.post("/", (req, res) => {
  const newPost = { ...req.body };
  posts.push(newPost);
  res.json(posts);
});

router.delete("/", (req, res) => {
  const postId = req.body["id"];
  const index = posts.find((post) => {
    return post.id === postId;
  });
  if (index) {
    posts.splice(index, 1);
    res.send("Success");
  } else {
    res.send("Post doesn't exist");
  }
});

router.get("/user/:id", authentication, (req, res) => {
  console.log(req.params.id, req.user.userId);
  if (req.params.id.toString() !== req.user.userId.toString()) {
    res.status(401).send("verify error");
    return;
  }
  const userPosts = posts.filter((post) => {
    return post.userId.toString() === req.user.userId.toString();
  });
  res.send(userPosts);
});

function authentication(req, res, next) {
  const authHeader = req.headers["auth"];
  const token = authHeader.split(" ")[1];

  if (token == null) {
    res.status(401).send("verify error");
    return;
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      res.status(401).send("verify error");
      return;
    }
    req.user = user;
    next();
  });
}

module.exports = router;
