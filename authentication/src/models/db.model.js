const mongoose = require('mongoose')

const mongooseSchema = new mongoose.Schema({
    user:String,
    password:String
})

const userModel = mongoose.model('user',mongooseSchema)

module.exports = userModel