const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userschema = new schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    contactNumber: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 65
    },
    batch: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('User', userschema);