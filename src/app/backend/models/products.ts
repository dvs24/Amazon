const mongoose = require("mongoose"); 

const ProductSchema = mongoose.Schema({
    title : String,
    imgUrl : String,
    price : Number
});

module.exports = mongoose.model("products", ProductSchema);

