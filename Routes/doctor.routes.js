const express=require("express");
const {doctorModel}=require("../Model/doctor.model")
const doctorRouter=express.Router();

doctorRouter.post("/appoinments", async(req,res)=>{
    try {
        const data=req.body;
        data.date=new Date();
        const appoinment= new doctorModel(data);
        await appoinment.save();
        res.status(201).json({message:"Appointment created succesfully"})
    } catch (error) {
        res.status(500).json(error.message);
    }
});

doctorRouter.get("/get/appointement", async(req,res)=>{
    try {
        const data=await doctorModel.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
})
doctorRouter.delete("/delete/appointement/:id", async(req,res)=>{
    try {
       await doctorModel.findByIdAndDelete(req.params.id);
        res.status(204).send("data deleted");
    } catch (error) {
        res.status(500).json({error:"Error deleteing "})
    }
})

module.exports={doctorRouter}