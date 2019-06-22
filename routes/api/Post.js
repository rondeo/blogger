const express = require('express');
const router = express.Router();

const Post = require('../../models/Post');

//@desc GET all posts
router.get('/', (req,res) => {
    Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
});

//@desc POST new post
router.post('/', (req,res) => {
    const newPost = new Post({
        post: req.body.post
    });
    newPost.save().then(post => res.json(post));
});

//@desc DELETE post
router.delete('/', (req,res) => {
    Post.remove().then(() => res.json())
});

module.exports = router