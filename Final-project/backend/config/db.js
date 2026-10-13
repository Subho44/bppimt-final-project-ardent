const mongoose=require('mongoose');
module.exports=async()=>{await mongoose.connect(process.env.MONGODB_URI || process.env.dburl);console.log('MongoDB connected');};
