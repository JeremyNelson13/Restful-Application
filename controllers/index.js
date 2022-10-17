const router = require('express').Router()

// Index GET route
router.get('/', (req, res) => {
    let games = [
        {
            title: 'DOOM',
            genre: 'Horror, FPS',
            platform: 'MS-DOS',
            releaseDate: '1993',
            boxArt:'http://placekitten.com/250/250'
        },
        {
            title: 'Super Mario Sunshine',
            genre: 'Third Person Platforming',
            platform: 'Nintendo Gamecube',
            releaseDate: '2001',
            boxArt: 'http://placekitten.com/250/250'
        }
    ]
    res.status(200).render('pages/index', {games})
})

// Stub POST route
router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /index')
})

// Stub GET New route(create new form)
router.get('/new', (req, res) => {
    res.status(200).render('../views/addGame')
})

// Stub GET by ID route(detail view by id)
// router.get('/index/:id', (req, res) => {})

// Stub PUT by ID route(update entry by id)
// router.put('/index/:id', (req, res) => {})

// Stub GET edit route(edit form entry)
// router.get('/index/:id/edit, (req, res) => {})

// Stub DELETE route(delete by id)
// router.delete('/index/:id', (req, res) => {})

// Stub POST route(comment on post by id)
// router.post('/index/:id/comment, (req, res) => {})

// Stub DELETE route(delete comment by id)
// router.delete('/index/:id/comment/:commentId, (req, res) => {})

// Wildcard and Homepage routes are in server index with rendering and middlewares.
// They can be refactored into this file or into multiple routers/controllers
// Depending on separation of concerns, tech stack, and project size.

module.exports = router