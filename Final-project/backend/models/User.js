const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        unique:true,
        required: true
    },
    password:{
        type:String,
        required:true
        
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    isverified:{
        type:Boolean,
        default:false
    },
    otp:{
        type:String,
    
    },
    otpExpire:{
        type:Date,
        
    },


},
{
    timestamps:true,
}

);

module.exports = mongoose.model("User", userschema);