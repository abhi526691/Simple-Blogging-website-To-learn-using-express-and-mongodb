const express = require('express')

const Blog = require('../model/blog')

const blog_index = (req, res) => {
    Blog.find().sort({createdAt : -1})
    .then((result) => {
        res.render('index', {blogs : result})
    })
    .catch((err) => {
        console.log(err)
    })
}

const blog_create = (req, res) => {
    const blog = new Blog(req.body)
    blog.save()
    .then((result) => {
        res.redirect('/blogs')
    })
    .catch((err) => {
        console.log(err)
    })
}


const blog_single_item = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then((result) => {
        res.render('details', {blog : result})
    })
    .catch((err) => {
        console.log(err)
    })
}


const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({redirect : '/blogs'})
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = {
    blog_index,
    blog_create,
    blog_single_item,
    blog_delete

}
