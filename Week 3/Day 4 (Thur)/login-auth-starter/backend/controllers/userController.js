const User = require('../models/User')

async function show(req, res) {
    try {
        console.log(req.id)
        const foundUser = await User.findById(req.id)
        
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