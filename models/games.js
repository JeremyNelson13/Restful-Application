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
            //below lines causing error with seeder. will comment out while testing. may not matter in final
            // build. error was to do with casting of the strings in this section. will research.
            // default: 'Unknown Release Date',
            // min: [1975, ' This is a good time to plan a museum trip'],

            // max: [new Date().getFullYear, ' That one isn`t out yet']
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