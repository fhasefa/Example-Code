const fruits = require('../models/fruits')

// The callback functions originally the second argument from -> app.get('/', () => {})
function index(req, res) {
    // Looks in the views folder for "fruits/Index" and passes { fruits } data to the view (kind of like a server props object)
    res.render('fruits/Index', { fruits })
}

// Those anonymous callback functions now have names: "index" and "show"
function show(req, res) {
    res.render('fruits/Show', { fruit: fruits[req.params.index] })
}

module.exports = { index, show }