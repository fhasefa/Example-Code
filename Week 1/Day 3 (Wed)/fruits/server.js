// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8080 

// Setup some data
const fruits = ['apple', 'banana', 'pear'];

// Create a "root" route 
app.get('/fruits', (req, res) => {
    res.send(fruits)
})

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})