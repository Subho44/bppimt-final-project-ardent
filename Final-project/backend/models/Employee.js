const mongoose = require("mongoose");

const employeeschema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    phone:{
        type:String,
        
    },
    department:{
        type:String,
        required: true
    },
    designation:{
        type:String,
        required: true
    },
    image:{ type:String, default:"" },
    documents:{
        type:String,
        
    },
    joiningdate:{
        type:Date,
        required: true
    },


},
{
    timestamps:true,
}

);

module.exports = mongoose.model("Employee", employeeschema);