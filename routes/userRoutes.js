const express = require('express')
const { userSignIn, userLogin } = require("../controllers/userController")

const userRoutes = express.Router()
userRoutes.post('/api/signIn', userSignIn);
userRoutes.post('/api/login', userLogin);
module.exports = {
   userRoutes
}