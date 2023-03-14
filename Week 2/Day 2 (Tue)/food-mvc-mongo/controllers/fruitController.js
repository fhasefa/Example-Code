const fruits = require('../models/fruits')

// Load the fruit model
const Fruit = require('../models/FruitModel')

// The callback functions originally the second argument from -> app.get('/', () => {})
module.exports.index = async (req, res) => {

    // Use the fruit model to interact with the database
    // find will get all documents from the fruit collection
    const fruits = await Fruit.find() 
    console.log(fruits)

    // Looks in the views folder for "fruits/Index" and passes { fruits } data to the view (kind of like a server props object)
    res.render('fruits/Index', { fruits })
}

// Those anonymous callback functions now have names: "index" and "show"
module.exports.show = async (req, res) => {
    const fruit = await Fruit.findById(req.params.index)
    res.render('fruits/Show', { fruit })
}

// GET /fruits/new
module.exports.new = (req, res) => {
    res.render('fruits/New')
}

// POST /fruits
module.exports.create = async (req, res) => {
    console.log('POST /fruits')
    console.log(req.body)
    if (req.body.readyToEat) {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }

    try {
        // use the model to interact with db and create a new document in the fruit collection
        const result = await Fruit.create(req.body)
        console.log(result)
    } catch(err) {
        console.log('error')
    }
    
    fruits.push(req.body)
    res.redirect('/fruits')
}

// DELETE /fruits/:name
module.exports.delete = (req, res) => {
    console.log('DELETE /fruits/:name')
    let index = fruits.findIndex((item) => item.name === req.params.name)
    fruits.splice(index, 1)
    res.redirect('/fruits')
} 

// GET /fruits/:name/edit
module.exports.edit = async (req, res) => {
    console.log('GET /fruits/:name/edit')
    const fruit = await Fruit.findById(req.params.name)
    res.render('fruits/Edit', { fruit })
}

// PUT /fruits/:name
module.exports.update = (req, res) => {
    console.log('PUT /fruits/:name')
    console.log(req.body)

    if (req.body.readyToEat) {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }

    let index = fruits.findIndex((item) => item.name === req.params.name)

    fruits[index] = req.body
    res.redirect('/fruits')
}
