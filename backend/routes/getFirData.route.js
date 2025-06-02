const express = require('express')
const route = express.Router()
const getUserDetails = require('../middleware/getUsersDetails.js')
const getFirDetails = require('../middleware/getFir.middleware.js')

route.get('/yourfirs',getUserDetails,getFirDetails,(req,res)=>{
 res.json(req.firs)
})
module.exports=route