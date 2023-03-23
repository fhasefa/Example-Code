const User = require('../models/User')

async function info(req, res) {
    try {
        const foundUser = await User.findById(req.userId)
        
        res.json({ 
            username: foundUser.username, 
            email: foundUser.email 
        })

    } catch (error) {
        res.json({ error: error.message })
    }
}

module.exports = {
    info
}