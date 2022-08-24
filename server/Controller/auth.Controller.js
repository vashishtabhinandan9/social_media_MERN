const express =require("express")
const router=express.Router();
const bcrypt=require('bcryptjs')
const User =require("../Model/user.Model")

const signup=(req,res)=>{

    const {name,email,password,pic} = req.body 

    
    if(!name || !email || !password) {
        return res.status(422).json({
            error:"please add all the fields"
        })
    }

    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
          return res.status(422).json({error:"user already exists with that email"})
        }
        const saltround=12;
        bcrypt.hash(password,saltround)
        .then(hashedpassword=>{
              const user = new User({
                  email,
                  password:hashedpassword,
                  name,
                  pic
              })
      
              user.save()
              .then(user=>{
                  // transporter.sendMail({
                  //     to:user.email,
                  //     from:"no-reply@insta.com",
                  //     subject:"signup success",
                  //     html:"<h1>welcome to instagram</h1>"
                  // })

                   return res.json({
                    success: true,
                    message:"saved successfully",
                    data: user
                        
                })
              })
              .catch(err=>{
                  console.log(err)
              })
        })
       
    })
    .catch(err=>{
        console.log(err);
        return res.status(500).json({//status 550 means 
            success: false,
            message: "Some Error occurred while searching for existing email. Contact your administrator"
        });
    })
}
  
       



const signin=(req,res)=>{

}

module.exports={signup,signin};
