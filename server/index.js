const express=require("express");
app=express();

app.get("/",(req,res)=>{
    res.write("hello");
    console.log("hello world")

})

app.listen(3000,()=>{
    console.log("server up")
})