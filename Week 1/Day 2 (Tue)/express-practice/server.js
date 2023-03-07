// Load express
const express = require('express')

// Create our express app
const app = express()

// Our "root" route for our app 
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.get('/home', (req, res) => {
    res.send('<h1>Home Page</h1>')
})

// Tell the app to listen on port 8080 for HTTP requests from clients
app.listen(8080, () => {
    console.log('Listening on port 8080')
})
