const { request, response } = require('express');
var express = require('express')
var router = express.Router();
var User = require('../models/user');
const { model, default: mongoose } = require('mongoose');

router.post('/register',(request,response)=>{
    var userData = request.body;
    var user = new User(userData)

    user.save((error,result)=>{
        if(error){
            console.log("Error saving the user")
        }
        response.sendStatus(201)
    })
})
router.post('/login',async(request,response)=>{
    var userData = request.body
    var user = await User.findOne({email:userData.email})
    if (!user){
        return response.status(401).send({message:'email or password invalid'})
    }
    if(userData.password != user.password){
        return response.status(401).send({message:'email or password invalid'})
    }
    return response.sendStatus(200)
})

router.get("/list",async (request, response) => {
    var users = await User.find({})
    response.send(users)
})

router.delete('/del/:_id',function(req,res){
    let delid = req.params._id;
    User.findOneAndDelete(({_id:delid}),function(err,docs){
        res.send(docs);
    })      
})

router.post("/update/:_id",async(req,res)=>{
    let upid= req.params._id;
    let upname = req.body;
    delete upname.__v;
    delete upname._id;
    console.log(upname);
    try{
       await User.findByIdAndUpdate(upid, upname);
       res.json({message: 'update'});
    }catch(err){
        console.log(err);
    }
})

var user = {router}
module.exports = user