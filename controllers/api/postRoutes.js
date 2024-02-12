const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

router.get("/", (req, res) => {
  Post.findAll({ include: [User, Comment] }).then((data) => {
    res.json(data);
  });
});

router.post("/", (req, res) => {
  const postObject = {
    title: req.body.title,
    content: req.body.content,
    userId: req.session.userId,
  };
  Post.create(postObject).then((postData) => {
    res.json(postData);
  });
});
router.delete("/:id", (req, res) => {
  Post.destroy({ where: { id: req.params.id } }).then((response) => {
    res.json(response);
  });
});
router.put('/:id', async(req, res) => {
    const postData = await Post.update(req.body, {where: {id: req.params.id}})
    res.json(postData)
})
module.exports = router;
