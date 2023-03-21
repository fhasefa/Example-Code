require('dotenv').config()

const express = require('express')
// Load cors -> npm i cors
const cors = require('cors')

const mongoConfig = require('./config/db')
const Todo = require('./models/todoSchema')

const app = express()

mongoConfig()

// Configure our app to allow other servers to communicate with it
app.use(cors())

// Setup a middleware for receiving JSON inside our request objects (ex: POST, PUT)
app.use(express.json())

// index route (for todos)
app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find()
        res.json(todos)
    } catch(err) {
        res.json({ error: err.message })
    }
})

// create route 
app.post('/todos', async (req, res) => {
    try {
        console.log(req.body)
        const todo = await Todo.create(req.body)
        res.json(todo)
    } catch(err) {
        res.json({ error: err.message })
    }
})

// delete/destroy route
app.delete('/todos/:id', async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id)
        res.json({ message: 'deleted successfully' })
    } catch(err) {
        res.json({ error: err.message })
    }
})

// update route
app.put('/todos/:id', async (req, res) => {
    try {
        await Todo.findByIdAndUpdate(req.params.id, req.body)
        res.json({ message: 'updated successfully' })
    } catch(err) {
        res.json({ error: err.message })
    }
})

app.listen(8080, () => {
    console.log('Listening on port 8080...')
})