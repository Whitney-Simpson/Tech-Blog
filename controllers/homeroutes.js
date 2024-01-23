const router = require('express').Router()
const {
    User, Post, Comment
} = require('../models')
router.get('/', async(req, res) => {
    const postData = await Post.findAll({include: [User, Comment]})
      // Serialize data so the template can read it
      const posts = postData.map((post) => post.get({ plain: true }));
    res.render('homepage', {posts, loggedIn: req.session.loggedIn})
})

router.get('/posts/:id', async (req, res) => {
    const postData = await Post.findByPk(req.params.id, {include: [{model: Comment, include: User}, User]})
   const post = postData.get({plain: true})
   res.render('singlePost', {...post, loggedIn: req.session.loggedIn})
})
router.get('/login', (req, res) =>{
    if(req.session.loggedIn) {
        res.redirect('/profile')
    }
    res.render('login')
} )





module.exports = router