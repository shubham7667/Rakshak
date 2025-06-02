const express = require('express')

const firbd = require('../model/fir')
const route = express.Router()
route.post('/onlinefir/fir', async (req, res) => {
    const { name, contact, gender, email, pincode, location, incidentDetails ,date,time} = req.body
    if (!email) {
       return res.status(402).json({ message: 'no user found' })
    }
    else {

        const createFir = await firbd.create({
            email: email,
            username: name,
            gender,
            pincode,
            incident: incidentDetails,
            location,
            phone: contact,
            date,
            time

        })
    }
   return res.status(200).json({message:'for added to database successfully'})
})
module.exports=route