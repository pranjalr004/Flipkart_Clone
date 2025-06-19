import express from 'express'
import {  userLogin, userSignup } from '../controller/userController.js'
import { getProducts, getProductsById } from '../controller/productController.js'
const router=express.Router()

router.post('/signup',userSignup)
router.post('/login',userLogin)





export default router