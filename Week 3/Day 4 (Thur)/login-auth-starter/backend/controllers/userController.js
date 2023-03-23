const User = require('../models/User')

async function show(req, res) {
    try {
        const foundUser = await User.findOne({ username: req.params.name })
        
        res.json({ 
            username: foundUser.username, 
            email: foundUser.email 
        })

    } catch (error) {
        res.json({ error: error.message })
    }
}

module.exports = {
    show
}