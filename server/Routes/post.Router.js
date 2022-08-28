const express = require('express');
const router = express.Router();
const isLoggedIn =require("../Middleware/auth.Middleware")
const {create,getallpost,mypost}  = require('../Controller/post.Controller')


router.post('/createpost',isLoggedIn,create)
router.get('/allpost',isLoggedIn,getallpost)
router.get('/mypost',isLoggedIn,mypost)
module.exports=router;
