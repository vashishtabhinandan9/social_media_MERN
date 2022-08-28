const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Post =  require('../Model/post.Model')


const create=(req,res)=>{
    const {title,body,pic} = req.body 
    if(!title || !body || !pic){
      return  res.status(422).json({error:"Please add all the fields"})
    }

    req.user.password = undefined
    const post = new Post({
        title,
        body,
        photo:pic,
        postedBy:req.user//this req.user comes from the 
        //isllogedin middleware which execute before createpost function
    })
    console.log(req.user);
    
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
}
         
module.exports={create};
