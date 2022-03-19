const mongoose = require('mongoose');

const TeamSchema = mongoose.Schema({
    team_last_name: {
        type:String,
        required:true
    },
    team_logo_url: {
        type:String,
        required:false
    },
    team_city: {
        type:String,
        required:false
    }
})

module.exports = mongoose.model('Team', TeamSchema)