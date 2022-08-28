const express = require('express');
const router = express.Router();

const authRoutes = require('./auth.Router')
const postRoutes = require('./post.Router')

/*
const categoryRoutes = require('./category.route')
const productRoutes = require('./product.route')
const cartRoutes = require('./cart.route')
const adminIndexRoutes = require('./admin/auth.route')


router.use("/", authRoutes)//user
router.use("/category", categoryRoutes)//category
router.use("/admin", adminIndexRoutes)//admin
//we haves seperated normal user from admin coz only admin will be able to do some extra tasks which user cant

router.use("/product", productRoutes)
router.use("/cart", cartRoutes)

*/
router.use("/",authRoutes)//user
router.use("/",postRoutes)//post


module.exports = router;