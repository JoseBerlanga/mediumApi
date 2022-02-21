const userModels = require('../models/user.model')
const User = require('../models/user.model')
const createError = require('http-errors')
const jwt = require('../lib/jwt.lib')

// GET, POST, DELETE, PATCH

// GET
function getAll() {
    return User.find()
}

// POST
function create (userData) {
    const newUser = new User(userData)

    const errors = newUser.validateSync()

    if (errors) {
        throw new createError (404, 'User already exist' )
    }

    return newUser.save()

}


// DELETE POST

function deleteById (id){
    return User.findByIdAndDelete(id)
}


async function login(email, password){
    const userFound = await User.findOne({ email })
    if(!userFound){
        throw new createError(401, 'Invalid Data')
    }

    const invalidPassword = await bcrypt.compare(password, userFound.password)
    if(!isValidPassword){
        throw new createError(401, 'Invalid data')
    }

    return jwt.sign({ id: userFound._id })
}







module.exports= {
    getAll,
    create,
    deleteById,
    login
    

}
