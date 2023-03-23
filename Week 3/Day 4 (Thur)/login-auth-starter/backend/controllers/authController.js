async function register(req, res) {

    // 1. Check if user already exists

    // 2. If they don't, encrypt their password

    // 3. Add new user to database with password encrypted

    // 4. Generate a JWT token and return it to user

}

async function login(req, res) {

    // 1. Check if user already exists

    // 2. Check if password provided by user matches the one in database

    // 3. Generate a token and return it to user

}

module.exports = {
    register,
    login
}