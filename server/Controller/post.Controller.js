const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Post =  require('../Model/post.Model')

const getallpost=(req,res)=>{
    Post.find()
    .populate("postedBy","_id name")//thing that you wanat to fill with data from other scheam
    //1st argument is what you wnat to be filled
    //2nd argumnet is what will be filled, if emoty all the dat will be filled

    //.populate("comments.postedBy","_id name")
    .sort('-createdAt')
    .then((posts)=>{
        res.json({posts})
    }).catch(err=>{
        console.log(err)
    })
}

const mypost=(req,res)=>{
    Post.find({postedBy:req.user._id})
    .populate("postedBy","_id name")
    .then(mypost=>{
        res.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })
}

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
         
module.exports={create,getallpost,mypost};
