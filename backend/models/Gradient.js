const mongoose = require('mongoose');

const GradientSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    thumbnail: String,
    date:Date,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
   
})

module.exports = mongoose.model('Gradient', GradientSchema);
