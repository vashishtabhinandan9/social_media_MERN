const express = require('express');
const router = express.Router();
const isLoggedIn =require("../Middleware/auth.Middleware")
const {create}  = require('../Controller/post.Controller')


router.post('/createpost',isLoggedIn,create)

module.exports=router;
