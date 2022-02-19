const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        requires: true
    },
    email:{
        type: String,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n+]/,
        required: true
    },
    

})

module.exports = mongoose.model('user', userSchema )