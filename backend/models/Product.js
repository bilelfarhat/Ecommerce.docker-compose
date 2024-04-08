const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const ProductSchema=new Schema({
    name:{
        type:String,
    },
    price:{
        type:Number,
    },
    quantity:{
        type:Number,
    },
});
module.exports=Product = mongoose.model("Product", ProductSchema);