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



// MORE DATA!!

/*

const vegetables = [
    {
        name:'cucumber',
        color: 'green',
        readyToEat: true
    },
    {
        name:'tomato',
        color: 'red',
        readyToEat: false
    },
    {
        name:'eggplant',
        color: 'purple',
        readyToEat: false
    }
];


const meats = [
    {
        name:'chicken',
        state: 'raw',
        readyToEat: false
    },
    {
        name:'beef',
        state: 'well done',
        readyToEat: true
    },
    {
        name:'pork',
        state: 'rare',
        readyToEat: true
    }
];

*/

/*

TASK 

    PART 1
        - Create models for vegetables and meats
        - Create an index and show route for each
        - Create a route for "food" that returns all food groups

    PART 2 
        - Add some logic for filtering the data based on the Query Params passed from the client
        - HINTS (you might need the "filter" method, maybe "includes", and definitely your homie "req")

*/

