const express = require('express')
const app = express()

const PORT = 8080

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter"];



app.get('/awesome', (req, res) => { //this will never be reached
    console.log('/awesome')
    res.send(`
    <h1>Plants are awesome!</h1>
    <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
  `);
});

app.get('/hello/:first/:last', (req, res) => {
    console.log(req.params)
    res.send('hello ' + req.params.first + ' ' + req.params.last)
})

app.get('/:index', (req, res) => { //:index can be anything, even awesome
    console.log('/:index')
    res.send(plants[req.params.index]);
});



app.listen(PORT, () => {
    console.log('Listening on port: ', PORT)
})