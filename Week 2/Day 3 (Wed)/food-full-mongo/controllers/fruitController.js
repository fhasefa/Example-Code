const fruits = require('../models/fruits')

// Load the fruit model
const Fruit = require('../models/FruitModel')

// The callback functions originally the second argument from -> app.get('/', () => {})
module.exports.index = async (req, res) => {

    try {
        // Use the fruit model to interact with the database
        // find will get all documents from the fruit collection
        const fruits = await Fruit.find() 
        console.log(fruits)

        // Looks in the views folder for "fruits/Index" and passes { fruits } data to the view (kind of like a server props object)
        res.render('fruits/Index', { fruits })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

// Those anonymous callback functions now have names: "index" and "show"
module.exports.show = async (req, res) => {
    try {
        const fruit = await Fruit.findById(req.params.id)
        res.render('fruits/Show', { fruit })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

// GET /fruits/new
module.exports.new = (req, res) => {
    res.render('fruits/New')
}

// POST /fruits
module.exports.create = async (req, res) => {
    console.log('POST /fruits')

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
        console.log(err)
    }
    
    res.redirect('/fruits')
}

// DELETE /fruits/:id
module.exports.delete = async (req, res) => {
    console.log('DELETE /fruits/:id')
    try {
        await Fruit.findByIdAndDelete(req.params.id)
        res.redirect('/fruits')
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
} 

// GET /fruits/:name/edit
module.exports.edit = async (req, res) => {
    console.log('GET /fruits/:id/edit')
    try {
        const fruit = await Fruit.findById(req.params.id)
        res.render('fruits/Edit', { fruit })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }    
}

// PUT /fruits/:id
module.exports.update = async (req, res) => {
    console.log('PUT /fruits/:id')
    console.log(req.body)

    if (req.body.readyToEat) {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }

   try {
        // pass the id to find the document in the db and the form data (req.body) to update it
        await Fruit.findByIdAndUpdate(req.params.id, req.body)
        res.redirect(`/fruits/${req.params.id}`)
   } catch(err) {
        console.log(err)
        res.send(err.message)
   }
}

// POST /fruits/seed
module.exports.seed = async (req, res) => {
    console.log('POST /fruits/seed')

    try {
        await Fruit.deleteMany({})
        await Fruit.create(fruits)
        res.redirect('/fruits')
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}
