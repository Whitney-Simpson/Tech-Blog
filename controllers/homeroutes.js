const router = require('express').Router()
const {
    User, Post, Comment
} = require('../models')
router.get('/', async(req, res) => {
    const postData = await Post.findAll({include: [User, Comment]})
      // Serialize data so the template can read it
      const posts = postData.map((post) => post.get({ plain: true }));
    res.render('homepage', {posts, logged_in: false})
})

router.get('/posts/:id', async (req, res) => {
    const postData = await Post.findByPk(req.params.id, {include: [{model: Comment, include: User}, User]})
   const post = postData.get({plain: true})
   res.render('singlePost', {...post})
})






module.exports = router