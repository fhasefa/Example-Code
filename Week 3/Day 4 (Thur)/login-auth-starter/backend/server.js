const express = require('express')
const cors = require('cors')

require('dotenv').config()

const mongoConfig = require('./config/db')

mongoConfig()

const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express()

const PORT = 8080

app.use(cors())
app.use(express.json())

app.use('/auth', authRoutes)
app.use('/users', userRoutes)

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})

