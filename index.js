// Imports express, imports dotenv configuration
const express = require('express')
require('dotenv').config()

// Declare app variable and assign it to express
const app = express()

// Imports controller from route-controller.js
app.use('/index', require('./controllers/index'))

// Declares port variable, assigns it value from .env file 
port = process.env.PORT

// Home route. This determines the behavior of the URL's default route.
app.get('/', (req, res) => {
    res.send('Hello, Welcome to an express server')
})

// Wildcard route will allow us to show a 404/error page.
app.get('*', (req, res)=>{
    res.status(404).send(`<h1>404 Page</h1>`)
})


// Calls listen method to turn on server and report back if it is running.
app.listen(port, (req, res) =>{
    console.log("now listening on port")
})