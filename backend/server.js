const express = require('express')
const mongoose = require('mongoose')
const app = express()
const user = require('./model/user.js')
const firbd = require('./model/fir.js')
const cors = require('cors')
const cookieParser = require('cookie-parser') // <-- Add this
const loginUser = require('./routes/user.login.route.js')
const userRegister = require('./routes/user.register.route.js')
const verify = require('./middleware/verify.js')
const getUserDetails = require('./middleware/getUsersDetails.js')
const profile= require('./routes/GetprofileDetails.route.js')
const Fir = require('./routes/fir.route.js')
const getFir = require('./routes/getFirData.route.js')
const getFirDetails=require('./middleware/getFir.middleware.js')
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))
app.use(express.json())
app.use(cookieParser()) // <-- Add this

app.get('/', (req, res) => {
    
    res.send('hello from expresss server')
})

app.use('/', userRegister)
app.use('/', loginUser)
app.use('/',profile)
app.use('/', verify)
app.use('/',Fir)
app.use('/',getFir)

app.listen(3000, () => {
    console.log('app is listening to port number 3000')
})