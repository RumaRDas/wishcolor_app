const mongoose = require('mongoose');

const GradientSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    thumbnail: String,
    color: String,
    date:Date,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    } 
}, {
    toJSON: {
        virtuals: true
    }
})
GradientSchema.virtual('thumbnail_url').get(function(){ return `http://localhost:4000/files/${this.thumbnail}`})
module.exports = mongoose.model('Gradient', GradientSchema);
