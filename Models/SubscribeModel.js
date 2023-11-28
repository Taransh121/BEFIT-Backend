const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    subscribe: {
        type: String,
        required: true
    }
}, { timeStamps: true });

module.exports = mongoose.model('Subscriber', userSchema);
