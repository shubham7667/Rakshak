const firdb = require('../model/fir')
const getUser = require('./getUsersDetails.js')

const getFir = async(req,res,next)=>{
try {
    const email = req.user.email;
    console.log('fir',email)
const firs = await firdb.find({email});
console.log(firs);
req.firs = firs;
next()
} catch (error) {
    res.status(500).json({message:'Error fetching in FIRs',error:error.message})
}
};
module.exports=getFir