const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({


    title:{
        type :String,
        required:true,
    },
    about:{
        type :String,
        required:true,
    },
    booktype:{
        type :String,
        required:true,
    },
    date:{
        type :Date,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    }
});

const itemsdata = mongoose.model("itemsdata",ProductSchema);
module.exports = itemsdata;