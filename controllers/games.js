const router = require('express').Router()
const db = require('../models')

// Index GET route
router.get('/', (req, res) => {
   db.Game.find()
   .then((games) => {
    res.status(200).render('../views/pages/games', {games})
   })
   .catch(err => {
    console.log(err)
    res.status(404).render('errorPage')
   })
})

// POST new game to db route
router.post('/', (req, res) => {
    db.Game.create(req.body)
    .then(() => {
        res.status(200).redirect('/games')
    })
    .catch(err => {
        console.log('err', err)
        res.status(404).render('errorPage')
    })

})

// GET New route(create new form)
router.get('/new', (req, res) => {
    res.status(200).render('../views/addGame')
})

// GET by ID route(detail view by id)
router.get('/:id', (req, res) => {
    db.Game.findById(req.params.id)
    .then(game => {
       res.status(200).render('../views/showGame', {game}) 
    })
    .catch(err => {
        console.log(err,'err')
        res.status(404).render('errorPage')
    })
    
})

// PUT edit route(edit form entry)
router.put('/:id', (req, res) => {
   res.status(200).send('PUT /games/:id stub')
})

// DELETE route(delete by id)
router.delete('/:id', (req, res) => {
    res.status(200).send('DELETE /games/:id stub')
})

// EDIT route for form
router.get('/:id/edit', (req,res) => {
    res.status(200).send('GET edit form stub')
})

// COMMENT ROUTES
router.post('/:id/comment', (req, res) => {
    res.status(200).send('GET /games/:id/comment stub')
})

// DELETE route(delete comment by id)
router.delete('/:id/comment/:commentId', (req, res) => {
    res.status(200).send('GET /games/:id/comment/:commentId stub')
})

// Wildcard and Homepage routes are in server index with rendering and middlewares.
// They can be refactored into this file or into multiple routers/controllers
// Depending on separation of concerns, tech stack, and project size.

module.exports = router