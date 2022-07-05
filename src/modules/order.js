import mongoose from "mongoose";
const {ObjectId} = mongoose.Types
const OrderSchema = mongoose.Schema({

    lastname:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    note:{
        type:String,
        required:true
    }

},{timestamps:true});

export default mongoose.model("order",OrderSchema);