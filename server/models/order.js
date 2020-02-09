const mongoose = require('mongoose');
require('dotenv').config();

const orderSchema = mongoose.Schema({
    
    fullName: {
        type: String,
        maxlength: 100,
        lowercase: true,
        required: true
    },
    adressLine: {
        type: String,
        maxlength: 100,
        lowercase: true,
        required: true
    },
    city: {
        type: String,
        maxlength: 100,
        lowercase: true,
        required: true
    },
    state: {
        type: String,
        maxlength: 100,
        lowercase: true,
        required: true
    },
    zip: {
        type: String,
        maxlength: 100,
        required: true
    },
    country: {
        type: String,
        maxlength: 100,
        lowercase: true,
        required: true
    },
    phoneNumber: {
        type: Number,
        maxlength: 12,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    products: {
        type: Array,
        ref: "Product"
    }
    
});

const Order = mongoose.model('Order', orderSchema);

module.exports = { Order }