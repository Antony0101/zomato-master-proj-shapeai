import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    fullname:{type:String, required:true},
    email:{type:String, required:true},
    password:String,
    address:[{details:String,for:String}],
    phoneNumber:[Number],
});

export const UserModel= mongoose.model("Users",UserSchema);