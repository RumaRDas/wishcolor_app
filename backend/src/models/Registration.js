const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    gradient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Gradient"
    },
    event : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Event"
    }
})
module.exports = mongoose.model('Registration', RegisterSchema);