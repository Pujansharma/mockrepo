const mongoose=require("mongoose");
require("dotenv").config();
const connetet=mongoose.connect(process.env.mongo_Url);

module.exports={connetet}