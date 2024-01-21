const router = require('express').Router()
const {
    User, Post, Comment
} = require('../../models')

router.get('/', (req, res) => {
    User.findAll().then(data => {res.json(data)})
})






module.exports = router