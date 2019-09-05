const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    uploadedOn:{
        type: Date,
        required:true
    }
})

module.exports = imageSchema