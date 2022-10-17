const router = require('express').Router()
const e = require('express')
const games = require('../models/games.js')

// Index GET route
router.get('/', (req, res) => {
    res.status(200).render('pages/index', {games})
})

// Stub POST route
router.post('/', (req, res) => {
    // title and platform are required. this if block will add
    // default information if it is not given in the form.
    if (!req.body.boxArt) {
        //Default image
        req.body.boxArt - 'http://placekitten.com/250/250'
    } if (!req.body.genre) {
        req.body.genre = 'Unknown Genre'
    } if (!req.body.releaseDate) {
        req.body.releaseDate = 'Unknown Date'
    }
    if (!req.body.rating) {
        req.body.rating = 'Unknown ESRB/PEGI/CERO'
    }
    games.push(req.body)
    res.status(200).redirect('/index')
})

// Stub GET New route(create new form)
router.get('/new', (req, res) => {
    res.status(200).render('../views/addGame')
})

// Stub GET by ID route(detail view by id)
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('errorPage')
    } else if(!games[id]) {
        res.render('error404')
    } else {
        res.status(200).render('../views/showGame', {game: games[id]})
    }
})

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