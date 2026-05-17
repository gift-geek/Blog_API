require("dotenv").config();
const express = require ('express');
const cors = require ('cors');
const port=process.env.PORT;

const live_url=process.env.LIVE_URL; 
const local_url=process.env.LOCAL_URL;

const mongoose = require('mongoose');
const router = require("./route/blogRoute");
mongoose.connect(live_url)
.then(()=>console.log("Mongodb connected"))
.catch((err)=>console.log("Error connectimg to mongodb",err));

const app = express();
app.use(cors());
app.use(express.json());
app.use("/blog",router)

app.get("/blog",(req,res)=>{
    res.send("Hello Bloggers")
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});