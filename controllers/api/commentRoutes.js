const router = require('express').Router()
const {User, Post, Comment} = require('../../models')

router.post('/:id', (req, res) => {
    //send post id from data attribute on button 
    const commentObject = {content: req.body.content, userId:1, postId: req.params.id}
    console.log(commentObject)
    Comment.create(commentObject).then(data => {
        res.json(data)

    })
})

router.get('/', (req, res) => {
    Comment.findAll().then(data => {
        res.json(data)

    })
})





module.exports = router