// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8080 

// Load our fruit data from models folder
const fruits = require('./models/fruits')

// Setup an "index" route 
app.get('/fruits', (req, res) => {
    res.send(fruits)
})

// Setup a "show" route
app.get('/fruits/:index', (req, res) => {
    res.send(fruits[req.params.index])
})

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})