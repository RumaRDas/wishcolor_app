const mongoose = require('mongoose');

const GradientSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    thumbnail: String

})
module.exports = mongoose.model('Gradient', GradientSchema);
