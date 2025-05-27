const express = require('express')
const route =  express.Router();
const user = require('../model/user.js')



route.post('/register',async(req,res)=>{
    const { username, email, password, phone, state, city, gender } = req.body;
 try{
       if (!username || !email || !password || !phone || !state || !city || !gender) {
        console.log("Kuch to gadbad hai ")
        return res.status(400).json({ error: 'All fields are required' });
    }

   const newuser = await user.create(
    {username, email, password, phone, state, city, gender}
)
console.log("Kam to hogya")
// console.log(newuser)   
    res.status(200).json({message:'registration successfull'})
 
    
 }catch (err){
console.error(err)
res.status(500).json({ message: "Something went wrong" });
 }
})

module.exports = route;