const mongoose = require('mongoose');

const LevelSchema = mongoose.Schema({
    order: {
        type:Number,
        required:true
    },
    format: {
        type:String,
        required:true
    },
    last_name: {
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Level', LevelSchema)