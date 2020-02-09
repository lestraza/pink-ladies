const mongoose = require('mongoose');
require('dotenv').config();

const productSchema = mongoose.Schema({

    type: {
        type: String,
        maxlength: 100,
        required: true
    },
    name: {
        type: String,
        maxlength: 100,
        required: true
    },
    price: {
        type: Number,
        maxlength: 100,
        required: true
    },
    url: {
        type: String,
        maxlength: 100,
        required: true
    },
    size: {
        type: String,
        required: true
    },

});

const Product = mongoose.model('Product', productSchema);

module.exports = { Product }