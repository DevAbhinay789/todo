import mongoose from "mongoose";
import todo from "./Todo.js";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
       required:true
    },
    otp:{
        type:String,
    },
    verified :{
        type:Boolean,
       default:false
    },
    // todo:{
    //   Types:mongoose.Schema.Types.ObjectId,
    //   ref:todo
    // }
},
{timestamps:true}
)

const User = mongoose.model('User', UserSchema);

export default User;