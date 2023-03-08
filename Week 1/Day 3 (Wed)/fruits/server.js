// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8080 

// Load our fruit data from models folder
const fruits = require('./models/fruits')
const vegetables = require('./models/vegetables')
const meats = require('./models/meats')

// Setup an "index" route for all food
app.get('/food', (req, res) => {
    // combine all the food group arrays into one big array
    let food = [...fruits, ...vegetables, ...meats]
    // when there is a query for color -> "/food?color=red"
    if (req.query.color) {
        // make a new array only containing items that match the color from the query
        let filtered = food.filter(item => item.color === req.query.color)
        // send only those items back
        res.send(filtered)
    } else {
    // when there are no queries -> "/food"
        res.send([...fruits, ...vegetables, ...meats])
        // Some examples of other ways we could've sent the data back: 
        //      res.send([fruits, vegetables, meats].flat())
        //      res.send([fruits, vegetables, meats])
        //      res.send({ fruits, vegetables, meats })
    }
})

// Setup an "index" route for fruits
app.get('/fruits', (req, res) => {
    res.send(fruits)
})

// Setup a "show" route for fruits
app.get('/fruits/:index', (req, res) => {
    res.send(fruits[req.params.index])
})

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