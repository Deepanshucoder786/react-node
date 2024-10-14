const mongoose= require('mongoose')
const Schema= mongoose.Schema
const UserSchema= new Schema({
    firstname:{type:String},
    lastname:{type:String},
    email:{type:String},
    mobileNo:{type:String},
    password:{type:String},

})
module.exports= mongoose.model('User',UserSchema)