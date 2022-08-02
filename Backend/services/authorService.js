var express = require('express');
const { model, default: mongoose } = require('mongoose');
var router = express.Router();
var Author = require('../models/author')




router.post('/add',(request,response)=>{ 
    var author = new Author(request.body)
    author.save((error,result)=>{
        if(error){
            console.log(error)
            return response.sendStatus(500).send({message:error})
        }
       return response.sendStatus(201)   
    })
})

router.get("/list",async (request, response) => {
    var authors = await Author.find({},'-__v')
    response.send(authors)
})
router.delete('/del/:firstName',function(req,res){
    let delid = req.params.firstName;
    Author.findOneAndDelete(({firstName:delid}),function(err,docs){
        res.send(docs);
    })  
})
router.put("/update:id",async(req,res)=>{
    let upid= req.params.id;
    let upname = req.body
    
    Author.findOneAndUpdate(({id:upid}), fu)
})

var author = {router}
module.exports = author