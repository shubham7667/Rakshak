const express = require('express')
const mongoose = require('mongoose') // <-- Add this
const app = express()
const user = require('./model/user.js')
const cors = require('cors')

const userRegister = require('./routes/user.register.js')

app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('hello from expresss server')
})

app.use('/',userRegister);

app.listen(3000,()=>{
    console.log('app is listening to port number 3000')
})