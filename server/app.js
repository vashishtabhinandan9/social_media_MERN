const express=require("express");
app=express();
const PORT =5000;
const env=require('dotenv')
env.config()

const database=require("./Database/db");

const indexrouter=require("./Routes/index.Router")


app.use(express.json());

app.use("/",indexrouter);


app.get("/",(req,res)=>{
    res.write("hello");
    console.log("hello world")
    res.end();
})

app.listen(PORT,()=>{
    console.log("server up")
})