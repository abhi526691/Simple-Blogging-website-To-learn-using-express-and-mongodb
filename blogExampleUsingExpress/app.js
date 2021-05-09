const express = require('express')
const mongoose = require('mongoose')
const app = express()
const blogRouter = require('./routers/blogRouter')
const Blog = require('./model/blog')
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

const dbURI = 'mongodb+srv://test_1234:test_1234@blog.qdpo3.mongodb.net/BloggingDatabase?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useUnifiedTopology: true, useNewUrlParser: true})
.then((result) => {
    app.listen(3000)
})
.catch((err) => {
    console.log(err)
})


app.get('/', (req, res) => {
    res.redirect('/blogs')
})


app.get('/about', (req, res) => {
    res.render('about')
})


app.get('/create', (req, res) => {
    res.render('add_blog')
})




app.use('/blogs', blogRouter)

app.use((req, res) => {
    res.render('404')
})