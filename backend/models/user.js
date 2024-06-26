const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    profileImg:{type:String},
},{versionKey:false})

const User = mongoose.model('users',userSchema);
module.exports=User;
