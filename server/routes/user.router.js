import express, { Router } from 'express';
import {forgotPassword, loginUser, registerUser, resetPassword, verifyEmail}  from '../controller/user.controller.js'
const userRoutes = express.Router();

userRoutes.post('/register',registerUser)

userRoutes.post('/login',loginUser)

userRoutes.post('/verify',verifyEmail)
userRoutes.post('/forgotpassword',forgotPassword)
userRoutes.post('/resetpassword',resetPassword)



export default userRoutes;