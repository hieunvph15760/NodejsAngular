import mongoose,{ObjectId} from "mongoose";

const OrderDetailsSchema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    sale_price:{
        type:Number,
        required:true
    },
    total:{
        type:Number,
        required:true
    },
    order:{
        type:ObjectId,
        ref:"order"
    }

},{timestamps:true});

export default mongoose.model("orderDetails",OrderDetailsSchema);