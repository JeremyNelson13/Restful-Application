const router = require('express').Router()

// Index GET route
router.get('/', (req, res) => {
    let games = []
    res.status(200).render('pages/index')
})


module.exports = router