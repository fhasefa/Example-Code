const express = require('express')
const app = express()

const PORT = 8080

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];

app.get('/:index', (req, res) => {
    res.send(plants[req.params.index]);
});

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT)
})