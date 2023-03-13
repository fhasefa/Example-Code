const fruits = require('../models/fruits')

// The callback functions originally the second argument from -> app.get('/', () => {})
module.exports.index = (req, res) => {
    // Looks in the views folder for "fruits/Index" and passes { fruits } data to the view (kind of like a server props object)
    res.render('fruits/Index', { fruits })
}

// Those anonymous callback functions now have names: "index" and "show"
module.exports.show = (req, res) => {
    res.render('fruits/Show', { fruit: fruits[req.params.index] })
}

module.exports.new = (req, res) => {
    res.render('fruits/New')
}

module.exports.create = (req, res) => {
    console.log('POST /fruits')
    res.send('data received')
}