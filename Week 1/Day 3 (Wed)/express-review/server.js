// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8080 

// Create a "root" route 
app.get('/', (req, res) => {
    res.send(`<h1>Hello Everybody</h1>`)
})

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})