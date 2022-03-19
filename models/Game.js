const mongoose = require('mongoose');

const GameSchema = mongoose.Schema({
    home_goal: {
        type: Number,
        required: true
    },
    away_goal: {
        type: Number,
        required: true
    },
    home_penal: {
        type: Number,
        required: false
    },
    away_penal: {
        type: Number,
        required: false
    },
    game_status: {
        type: String,
        required: true
    },
    match_day: {
        type: Date,
        require: false
    },
    home_team_name: {
        type: String,
        required: true
    },
    away_team_name: {
        type: String,
        required: true
    },
    tour: {
        type: Number,
        required: true
    },
    home_team_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    away_team_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    league_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

module.exports = mongoose.model('Game', GameSchema)