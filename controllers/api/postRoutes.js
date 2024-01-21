const router = require('express').Router()
const {
    User, Post, Comment
} = require('../../models')

router.get('/', (req, res) => {
    Post.findAll({include: [User, Comment]}).then(data => {res.json(data)})
})






module.exports = router