import mongoose from "mongoose";
const {ObjectId} = mongoose.Types
const BooksSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    sale_price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:ObjectId,
        ref:"category"
    },
    status:{
        type:Number,
        default:1
    }
},{timestamps: true})
BooksSchema.index({name:"text"});
const books = mongoose.model("books",BooksSchema);
books.createIndexes({name:"text"});
export default books
