const express = require('express')
const mongoose = require('mongoose')
const app = express()
const user = require('./model/user.js')
const cors = require('cors')
const cookieParser = require('cookie-parser') // <-- Add this
const loginUser = require('./routes/user.login.js')
const userRegister = require('./routes/user.register.js')
const verify = require('./routes/verify.js')

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
app.use('/', verify)

app.listen(3000, () => {
    console.log('app is listening to port number 3000')
})