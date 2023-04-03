const express = require('express')
const router = express.Router()
const { getPost, createPost } = require('../controllers/Post')
const verifyToken = require('../middlewares/VerifyToken')

router.route('/post').get(verifyToken, getPost).post(verifyToken, createPost)

module.exports = router