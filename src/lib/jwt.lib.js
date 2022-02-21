const jwt = require('jsonwebtoken')
const { JWT_SECRET } = process.env

function sign (payload = {} ) {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h'})
}

function verify (token){
    return jwt.verify(token, JWT_SECRET)
}

module.exports = {
    sign,
    verify
}