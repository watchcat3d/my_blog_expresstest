var express = require('express');
var db = require('../model/BlogComment_handle');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var post = req.body;
    var pattem = {
        blog_writer: post.blog_writer,
        blog_date: post.blog_date
    }
    db.blogComment_save(post).then(function (result) {
        res.send(result);
    })
});

module.exports = router;
