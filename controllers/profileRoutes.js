const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  //displays user name['name']
  const postData = await Post.findAll({
    where: { userId: req.session.userId },
    include: [
      User,
      { model: Comment, include: [{ model: User, attributes: ["name"] }] },
    ],
  });
  const posts = postData.map((post) => post.get({ plain: true }));
  res.render("profile", { posts, loggedIn: req.session.loggedIn, name: req.session.name });
});

module.exports = router;
