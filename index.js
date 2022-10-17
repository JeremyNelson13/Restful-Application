// Imports express, imports dotenv configuration
const express = require('express')
require('dotenv').config()

// Declare app variable and assign it to express
const app = express()

// Sets view engine for jsx/express-react-views
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
// Imports controller from route-controller.js
app.use('/index', require('./controllers/index'))

// Declares port variable, assigns it value from .env file 
port = process.env.PORT

// Home route. This determines the behavior of the URL's default route.
app.get('/', (req, res) => {
    res.render('home')
})

// Wildcard route will allow us to show a 404/error page.
app.get('*', (req, res)=>{
    res.status(404).render('errorPage')
})


// Calls listen method to turn on server and report back if it is running.
app.listen(port, (req, res) =>{
    console.log(`now listening on port ${port}`)
})