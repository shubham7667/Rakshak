require('dotenv').config();
const express = require('express')
const route = express.Router()
const users  = require('../model/user.js');
const jwt = require('jsonwebtoken');
const verify = require('../middleware/verify.js')

route.post('/loginUser',async(req,res)=>{

   // users who want to login with their google id .

   // here i want to add some logic so that i can write an condition for the users who are google signers and who are traditional signers as they both have different criteria for validation .

   // google sigin do not require any password authentication 

   const {email,name,avtar}= req.body
   console.log(email);
   console.log(name);
   const existingUser = await users.findOne({email})
   if (!existingUser)
   {
      console.log(avtar)
      const createUser = await users.create({username:name,email,avtar})
    console.log('successfully created new user')
    
   }
   else{
     console.log('returning user')
   }

// i need to create dashboard to verfiy token

   // setting token to webiste
     const token = jwt.sign(email,process.env.JWT_SECRET_KEY)
      res.cookie('login_token',token,{
         httpOnly:true
      })

   const verifyUser= jwt.verify(token,process.env.JWT_SECRET_KEY)
     try{
       if(!verifyUser){
        console.log('Login failed')
      }
      else{
      console.log("Login successful")
      }
     }catch(err){
         res.status(500).json({message:'login failed catch '})
      console.error(err)
     }


   res.status(200).json({message:existingUser?`Welcome back ${name}`:`Hello ${name}`})
});
module.exports = route;