// Require mongoose: 
const mongoose = require('mongoose')
const { Schema } = mongoose 

// Schema:
const languageSchema = new Schema({
    name: { type: String, required: true },
    greeting: String,
    pangram: String,
    filler: String
})

// Model and Export: 
const Language = mongoose.model('Language', languageSchema)
module.exports = Language
