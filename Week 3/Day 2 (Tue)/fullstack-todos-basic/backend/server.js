const express = require('express')

// Load cors -> npm i cors
const cors = require('cors')

const app = express()

// Configure our app to allow other servers to communicate with it
app.use(cors())

app.get('/test', (req, res) => {
    res.json({ message: 'hello' })
})

app.listen(8080, () => {
    console.log('Listening on port 8080...')
})