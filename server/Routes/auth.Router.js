const express = require('express');
const router = express.Router();

//const isLoggedIn =require("../Middleware/auth.Middleware")
const {
    signup,
    signin
} = require('../Controller/auth.Controller');


router.post('/signup',signup);

/*
router.post('/protected',isLoggedIn,(req,res)=>{
   res.send("hello") 
});
*/

router.post('/signin',signin);

module.exports = router;