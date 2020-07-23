const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: String,
    description: String,
    cost: Number,
    thumbnail: String,
    categori: String,
    date: Date,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    toJSON: {
        virtuals: true
    }
})
EventSchema.virtual('thumbnail_url').get(function () { return `http://localhost:4000/files/${this.thumbnail}` })
module.exports = mongoose.model('Event', EventSchema);
