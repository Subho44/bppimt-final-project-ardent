require('dotenv').config();
const express=require('express');const cors=require('cors');const path=require('path');
const bcrypt=require('bcryptjs');const User=require('./models/User');const connectdb=require('./config/db');
const app=express();app.use(cors({origin:process.env.CLIENT_ORIGIN?.split(',') || 'http://localhost:5173'}));app.use(express.json({limit:'1mb'}));
app.use('/uploads',express.static(path.join(__dirname,'uploads')));
app.get('/',(req,res)=>res.send('HR Portal API is working'));
app.use('/api/auth',require('./routes/authroutes'));
app.use('/api/employees',require('./routes/employeeroutes'));
async function start(){await connectdb();
 if(process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD){const email=process.env.ADMIN_EMAIL.trim().toLowerCase();
  const exists=await User.findOne({email}); if(!exists){await User.create({name:process.env.ADMIN_NAME || 'Administrator',email,password:await bcrypt.hash(process.env.ADMIN_PASSWORD,12),role:'admin',isverified:true});console.log('Initial admin account created');}
 }
 app.listen(Number(process.env.PORT || process.env.port || 5600),()=>console.log('Server started'));
}
start().catch(e=>{console.error('Startup error:',e.message);process.exit(1)});
