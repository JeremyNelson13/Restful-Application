const router = require('express').Router()

// Index GET route
router.get('/', (req, res) => {
    let games = [
        {
            title: 'DOOM',
            genre: 'Horror, FPS',
            console: 'MS-DOS',
            releaseDate: '1993',
            boxArt:'http://placekitten.com/250/250'
        },
        {
            title: 'Super Mario Sunshine',
            genre: 'Third Person Platforming',
            console: 'Nintendo Gamecube',
            releaseDate: '2001',
            boxArt: 'http://placekitten.com/250/250'
        }
    ]
    res.status(200).render('pages/index', {games})
})


module.exports = router