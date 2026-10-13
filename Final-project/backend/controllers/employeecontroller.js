const Employee=require('../models/Employee');
const fs=require('fs'); const path=require('path');
const clean = b => Object.fromEntries(['name','email','phone','department','designation','documents','joiningdate'].filter(k=>b[k]!==undefined).map(k=>[k,String(b[k]).trim()]));
const removeImage=filename=>{if(filename && filename.startsWith('/uploads/')) fs.promises.unlink(path.join(__dirname,'..',filename.slice(1))).catch(()=>{});};
exports.addemp=async(req,res)=>{
 try {const data=clean(req.body); if(req.file)data.image='/uploads/'+req.file.filename;
 const emp=await Employee.create(data); res.status(201).json({message:'Employee added successfully',emp});
 }catch(e){if(req.file)removeImage('/uploads/'+req.file.filename); res.status(400).json({message:e.message});}
};
exports.getemp=async(req,res)=>{try{res.json(await Employee.find().sort({createdAt:-1}));}catch(e){res.status(500).json({message:'Unable to load employees'});}};
exports.singelemp=async(req,res)=>{try{const emp=await Employee.findById(req.params.id); if(!emp)return res.status(404).json({message:'Employee not found'}); res.json(emp);}catch(e){res.status(400).json({message:'Invalid employee ID'});}};
exports.updateemp=async(req,res)=>{try{const old=await Employee.findById(req.params.id);if(!old)return res.status(404).json({message:'Employee not found'});
 const data=clean(req.body); if(req.file)data.image='/uploads/'+req.file.filename;
 const emp=await Employee.findByIdAndUpdate(req.params.id,data,{new:true,runValidators:true});if(req.file)removeImage(old.image);res.json({message:'Employee updated',emp});
 }catch(e){if(req.file)removeImage('/uploads/'+req.file.filename);res.status(400).json({message:e.message});}};
exports.deleteemp=async(req,res)=>{try{const emp=await Employee.findByIdAndDelete(req.params.id);if(!emp)return res.status(404).json({message:'Employee not found'});removeImage(emp.image);res.json({message:'Employee deleted'});}catch(e){res.status(400).json({message:'Invalid employee ID'});}};
