const jwt = require('jsonwebtoken')

async function authorize(req, res, next) {

    try {
        // 1. Check if the request has a token
        let token = req.header("Authorization") // ->  "Bearer adshjh0249384la;sf"
console.log('token before: ', token)
        if (!token) { 
            throw new Error('No token provided')
        }

        token = token.replace("Bearer ", "") // -> "adshjh0249384la;sf"
console.log('token after: ', token)
        // 2. Check that the token is valid and not expired

        const payload = jwt.verify(token, process.env.JWT_SECRET)
console.log('payload: ', payload)
        if (payload.error) {
            throw new Error(payload.error)
        }

        // 3. Attach the payload from the token to the request object (req)

        req.userId = payload.id
        req.user = payload.user
console.log('is there an id? : ', req.id)
        // 4. Move on to the requested route (next)
        next()

    } catch(err) {
        console.log(err)
        res.status(403).json({ error: err.message })
    }
}

module.exports = {
    authorize
}