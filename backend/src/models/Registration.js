const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    color: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
 gradient:{
     type: mongoose.Schema.Types.ObjectId,
     ref: "Gradient"
 }
})
module.exports = mongoose.model('Registration', RegisterSchema);