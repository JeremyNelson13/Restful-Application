const router = require('express').Router()

// Index GET route
router.get('/', (req, res) => {
    res.response(200).send('GET /index')
})


module.exports = router