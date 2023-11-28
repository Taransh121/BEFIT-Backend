const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 3,
        max: 20
    },
    lastName: {
        type: String,
        required: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    password: {
        type: String,
        required: true,
        min: 5
    },
    phone: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: ""
        // required: true
    },
    city: {
        type: String,
        required: true
    }
}, { timeStamps: true });

module.exports = mongoose.model('User', userSchema);