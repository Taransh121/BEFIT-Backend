const mongoose = require('mongoose');

const trainerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 30
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    experience: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        default: ""
    },
    insta: {
        type: String
    }
}, { timeStamps: true });

module.exports = mongoose.model('Trainer', trainerSchema);