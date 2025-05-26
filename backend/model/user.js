const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rakshak');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
       
    },
    email: {
        type: String,
        required: true,
  
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    gender: { // <-- Add this
        type: String,
        required: true
    }
});

const user= mongoose.model('user',userSchema);
module.exports = user;