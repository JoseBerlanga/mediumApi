const userModels = require('../models/user.model')
const user = require('../models/user.model')
const createError = require('http-errors')

// GET, POST, DELETE, PATCH

// GET
function get() {
    return user.find()
}

// POST








module.exports= {
    get,

}
