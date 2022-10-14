// Imports express, imports dotenv configuration
const express = require('express')
require('dotenv').config()

// Declare app variable and assign it to express
const app = express()

// Home route. This determines the behavior of the URL's default route.
app.get('/', (req, res) => {
    res.send('Hello, Welcome to an express server')
})

// Declares port variable, assigns it value from .env file 
port = process.env.PORT

// Calls listen method to turn on server and report back if it is running.
app.listen(port, (req, res) =>{
    console.log("now listening on port")
})