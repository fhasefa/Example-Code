const fruits = require('../models/fruits')

// The callback function originally from "app.get('/', () => {})"
function index(req, res) {
    res.send(fruits)
}

// They now have names: "index" and "show"
function show(req, res) {
    res.send(fruits[req.params.index])
}

module.exports = { index, show }