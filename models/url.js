const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    shorturl: {
        type: String,
        required: true
    },
    longurl: {
        type: String,
        required: true,
    },
    description: {
        type: String
    }
})


module.exports = mongoose.model('Url', urlSchema);