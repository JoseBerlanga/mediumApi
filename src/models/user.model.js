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
    password:{
        type: String,
        requires: true,
        minlength: 6
    }
    

})

module.exports = mongoose.model('user', userSchema )