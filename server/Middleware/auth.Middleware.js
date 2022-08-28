const jwt =require("jsonwebtoken");
const mongoose = require('mongoose')
const User = require("../Model/user.Model")

const isLoggedIn=(req,res,next)=>{
    const {authorization} = req.headers
    //authorization === Bearer ewefwegwrherhe
    if(!authorization){
       return res.status(401).json({error:"you must be logged in"})
    }
    const token = authorization.split(" ")[1];
    jwt.verify(token,process.env.JWT_SECRET_KEY,(err,payload)=>{
        if(err){
         return   res.status(401).json({error:"you must be logged in"})
        }/* request body contains many things
       req{
        headers : ( ) ,
        body : ( ),
        lot  of other stuff
        user :{
            id 
            and other stuff
        }

      */

        const {_id} = payload
        User.findById(_id).then(userdata=>{
            req.user = userdata//now req.user has everything of our looged in user so we can use its data 
           next();
           //res.json("hello")
        })
       // next() //putting next() out findbyid will require sometimte so due to this we
       // will fget user data afeter some delay we 
       //want it once the aearch is doent do we write next() inside


        
    })

}

module.exports=isLoggedIn;