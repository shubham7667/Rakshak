// fetch login cookie from the website.
// if cookie then make user authorized to navigate to the certain route else redirect to login page
const express =require('express')

const app = express()
const route = express.Router()


route.get('/verify',(req,res,next)=>{
    const token = req.cookies.login_token
    if(token){

        console.log(token)
        res.status(200).json({message:'token verified'})
    }
    else{
        res.status(400).json({message:'gand marao nhi hai token'})
    }
    next();
})
module.exports = route