const mongoose = require('mongoose')
const gameSchema = new mongoose.Schema(
    {
        title:
        {
            type: String,
            required: true
        },
        genre:
        {
            type: String,
            required: false,
            default: 'Unknown Genre'
        },
        platform:
        {
            type: String,
            required: true
        },
        rating:
        {
            type: String,
            required: false,
            default: 'Unknown ESRB/CERO/PEGI rating'
        },
        releaseDate:
        {
            type: Number,
            required: false,
            
            min: [1975]
        },
        boxArt:
        {
            type: String,
            default: 'http://placekitten.com/350/350'
        },
        comments: [{type: mongoose.Schema.Types.ObjectId, ref: "Comment" }]
    }
)

module.exports = mongoose.model('Game', gameSchema)