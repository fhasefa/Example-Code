// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8080 

// Load our fruit data from models folder
const vegetables = require('./models/vegetables')
const meats = require('./models/meats')

// Load our fruit routes
const fruitRoutes = require('./routes/fruitRoutes')

// Load the create engine -> (npm install jsx-view-engine react react-dom)
const { createEngine } = require('jsx-view-engine')

// Configure the view engine and look for files ending in jsx
app.set('view engine', 'jsx')

// Create the engine and accept files ending in jsx
app.engine('jsx', createEngine())

// Connect our routes to our express app
app.use('/fruits', fruitRoutes)

// Setup an "index" route for vegetables
app.get('/vegetables', (req, res) => {
    res.send(vegetables)
})

// Setup a "show" route for vegetables
app.get('/vegetables/:index', (req, res) => {
    res.send(vegetables[req.params.index])
})

// Setup an "index" route for meats
app.get('/meats', (req, res) => {
    res.send(meats)
})

// Setup a "show" route for fruits
app.get('/meats/:index', (req, res) => {
    res.send(meats[req.params.index])
})

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})