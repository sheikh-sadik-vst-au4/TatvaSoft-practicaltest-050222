import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstName:{type:String,required:false},
    lastName:{type:String,required:false},
    email:{type:String,required:true},
    dob:{type:Date,required:false},
    role:{type:String,required:true},
    city:{type:String,required:false},
    state:{type:String,required:false},
    password:{type:String,required:false},
});

const userModel = mongoose.model('user', userSchema)  
export default userModel;