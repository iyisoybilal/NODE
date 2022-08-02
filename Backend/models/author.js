var mongoose = require('mongoose')

var authorSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    id:Number
    
})
module.exports = mongoose.model("Authors", authorSchema);
