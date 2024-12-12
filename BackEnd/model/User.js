import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name :{
        type : String,
        require : true
    },
    email:{
        type : String,
        require : true,
        unique : true
    },
    password : {
        type : String,
        require : true
    },
    isVerfiedField : {
        default : false,
        type: Boolean
    },
    resetPasswordToken : String,
    resetPasswordExpiredAt : Date,
    verificationToken : String,
    VerificationTokenExpireAt : Date
});

export const Users = mongoose.model("User", UserSchema)