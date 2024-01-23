const router = require('express').Router()
const {User, Post, Comment} = require('../../models')

router.post('/', (req, res) => {
    //send post id from data attribute on button 
    const commentObject = {content: req.body.content, userId: req.session.userId, postId: 2}
    Comment.create(commentObject).then(data => {
        res.json(data)
    })
})






module.exports = router