const express =require('express')
const getUserData = require('../middleware/getUsersDetails')
const route = express.Router()

route.get('/profile',getUserData,(req,res)=>{
    const{email,username,avtar}=req.user
    console.log('profile ',email)
    res.status(200).json({
        email,
        username,
        avtar
    })
})
module.exports=route