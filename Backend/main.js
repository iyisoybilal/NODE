var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var Author = require('./models/author')
var connect = require('connect');
var serveStatic = require('serve-static');
var author = require('./services/authorService')
var user = require('./services/userService')
var app = express()

app.use(bodyParser.json())


mongoose.connect('mongodb+srv://Bilal:12345@mongodb.nmtplvk.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('Başarılı olduk')}).catch((err)=>{
        console.log(err)
    })


app.use('/author',author.router)
app.use('/user',user.router)

app.listen(8080)
