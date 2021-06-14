const mongoose=require('mongoose');

const schema=mongoose.Schema;
const signUPSchema=new schema({
          
    fullName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const SignUP=mongoose.model('myTable',signUPSchema);
module.exports=SignUP;