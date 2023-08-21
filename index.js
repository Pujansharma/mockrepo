const express=require("express");
const {connetet}=require("./connect/config");
const {Userrouter}=require("./Routes/userroutes");
const {doctorRouter}=require("./Routes/doctor.routes")
const app=express();
require("dotenv").config();
const port=process.env.port|| 8080;
const cors=require("cors");
app.use(express.json());
app.use(cors());
app.use(Userrouter)
app.use(doctorRouter)

app.listen(port, async()=>{
    try {
        await connetet;
        console.log("{message:conneted to db}")
    } catch (error) {
        console.log({error:"error"})
    }
    console.log(`mssg:server is running on port ${port}`);
})