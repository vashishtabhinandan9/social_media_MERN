const express =require("express")
const router=express.Router();
const bcrypt=require('bcryptjs')
const User =require("../Model/user.Model")

const jwt = require('jsonwebtoken');



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

    const {
        email,
        password
    } = req.body;

    if(!email || !password){
        return res.status(422).json({error:"please add email or password"})
     }

    User.findOne({
        email: email
    }).exec((error, savedUser) => {

        if (error) {
            console.log(error);

            return res.status(500).json({
                success: false,
                message: "DB Error occurred. Contact your administrator"
            });
        }
        
        if (savedUser) {
// console.log("-----------start-----------")
            const isAuthenticated =  bcrypt.compare(password,savedUser.password);
            if (isAuthenticated) {

                const token = jwt.sign({_id:savedUser._id},process.env.JWT_SECRET_KEY)
                const {_id,name,email,followers,following,pic} = savedUser
                return res.json({token,user:{_id,name,email,followers,following,pic}})
                 /**
                 * Generally to generate token we pass hte mongodb_id. 
                 * So we pass the id of that collection and not of that user .
                 * it is agood practice .that what we have done above

                 */
              
            } else {
                return res.json({
                    success: false,
                    message: "User Login failed. Bad Authentication"
                })
            }

        } else {
        //    console.log("false");
            return res.json({
                success: false,
                message: "User Email Does not exist."
            });
        }
    })
}

module.exports={signup,signin};
