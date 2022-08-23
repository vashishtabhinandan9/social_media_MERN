const express=require("express");
app=express();

const env=require('dotenv')
env.config()

const database=require("./Database/db");


app.get("/",(req,res)=>{
    res.write("hello");
    console.log("hello world")
    res.end();

})

app.listen(3000,()=>{
    console.log("server up")
})