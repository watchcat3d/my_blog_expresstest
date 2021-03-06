var mongoose = require('mongoose');
var Blog = require('./Blog_model');

module.exports = {
    blog_save: function (blog) {
        return new Promise(function (resolve, reject) {
            new Blog({
                title: blog.title,
                content: blog.content,
                writer: blog.writer,
                blog_date: blog.blog_date
            }).save(function (err, res) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(res);
                    resolve(res);
                }
            });
        });
    },
    blog_search: function (pattem) {
        return new Promise(function (resolve, reject) {

            Blog.find(pattem, function (err, res) {
                if (err) {
                    console.log(err);
                    return false;
                }
                else {
                    console.log(res.length + "个博客已查找到");
                    resolve(res);
                }
            });
        });
    },
    blog_count: function (pattem) {
        return new Promise(function (resolve, reject) {
            Blog.count(pattem, function (err, res) {
                if (err) {
                    console.log(err);
                    return false;
                }
                else {
                    console.log(res + "个博客");
                    resolve(res);
                }
            });
        });
    },
    blog_delete: function (pattem) {
        return new Promise(function (resolve, reject) {
            Blog.remove(pattem, function (err, res) {
                if (err) {
                    console.log(err);
                    return false;
                }
                else {
                    console.log("1个博客已删除");
                    resolve(res);
                }
            });
        });
    },
    blog_update: function (pattem, post) {
        return new Promise(function (resolve, reject) {
            Blog.update(pattem, post, function (err, res) {
                if (err) {
                    console.log(err);
                    return false;
                }
                else {
                    console.log(res.length + "个博客已更新");
                    resolve(res);
                }
            });
        });
    }

};