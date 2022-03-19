const mongoose = require('mongoose');

const LeagueSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    }, 
    start_year: {
        type:Number,
        required:true
    },
    finish_year: {
        type:Number,
        required:true
    },
    team_size: {
        type:Number,
        required:true
    },
    level_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
})

module.exports = mongoose.model('League', LeagueSchema)