const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/rakshak');

const firSchema = new mongoose.Schema({
id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user',
    // required:true
},
username:{

    type:String,
    required:true
    // ref :'user',
    // required:true
},
email:{

    type:String,
    required:true
    // ref :'user',
    
},
pincode:{

    type:Number,
    required:true
    
},
incident:{

    type:String,
    required:true
    
},
phone:{

    type:Number,
    required:true
    
},
location:{

    type:String,
    required:true
    
},
gender:{

    type:String,
    required:true
    
},
date:{
    type:Date,
    required:true
},
time:{
    type:String,
    required:true
}
})

const firdb=mongoose.model('firdb',firSchema)
module.exports=firdb;