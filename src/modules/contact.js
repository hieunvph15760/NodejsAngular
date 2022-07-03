import mongoose from "mongoose";

const ContactSchema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }

},{timestamps:true})

export default mongoose.model("contact",ContactSchema);