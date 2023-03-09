const fruits = require('../models/fruits')

// The callback functions originally the second argument from -> app.get('/', () => {})
function index(req, res) {
    res.send(fruits)
}

// Those anonymous callback functions now have names: "index" and "show"
function show(req, res) {
    res.render('fruits/Show')
}

module.exports = { index, show }