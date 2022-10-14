const router = require('express').Router()

// Index GET route
router.get('/', (req, res) => {
    res.status(200).send('GET /index')
})


module.exports = router