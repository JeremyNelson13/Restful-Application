const mongoose = require('mongoose')
const gameSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        genre: {type: String, required: false, default: 'Unknown Genre'},
        platform: {type: String, required: true},
        rating: {type: String, required: false, default: 'Unknown ESRB/CERO/PEGI rating'},
        releaseDate: {type: Number, required: false, default: 'Unknown Release Date'},
        boxArt: {type: String} 
        
    }
)

module.exports = mongoose.model('Game', gameSchema)