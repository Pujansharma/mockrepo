const express=require("express");
const {userModel}=require("../Model/user.model");
const jwt =require('jsonwebtoken');
const bcrypt=require("bcrypt");
const Userrouter=express.Router();


// User Rigester
Userrouter.post("/signup", async (req,res)=>{
    try {
        const {email, password}=req.body;
        const hashpass=await bcrypt.hash(password, 10);
        const allreadyuser= await userModel.findOne({email});
        if(allreadyuser){
            return res.status(400).json("user allready present")
        }
        const user= new userModel({email, password:hashpass});
        await user.save();
        res.status(200).json("user register succesfully")
    } catch (error) {
        res.status(500).json("something went wrong")
    }
})


///login User
Userrouter.post("/login", async(req,res)=>{
    try {
        const {email, password}=req.body;
        const user=await userModel.findOne({email});
        if(!user){
            return res.status(400).json("Invaild credentail")
        }
        const ispass=await bcrypt.compare(password, user.password);
        if(!ispass){
            return res.status(400).json("Invaild credentail")
        }
        const token=jwt.sign({email},"masai");
        res.status(200).json({token})
    } catch (error) {
        res.status(400).json("Invaild credentail")
    }
});


module.exports={Userrouter}