const mongoose = require('mongoose')

let commentSchema = new mongoose.Schema({
    author: {type: String, default: 'Anonymous'},
    rave: {type: Boolean, default: false},
    stars: {type: Number, required: true},
    content: {type: String, default:''}
})

module.exports = mongoose.model('Comment', commentSchema)