const mongoose=require("mongoose");

const doctorSchema=mongoose.Schema({
    name:String,
    imageURl:String,
    Specialization:String,
    Experience:String,
    location:String,
    date:Date,
    slots:Number,
    fee:Number
});
const doctorModel=mongoose.model("doctorData", doctorSchema);

module.exports={doctorModel};