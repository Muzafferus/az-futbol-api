const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const Game = require('../models/Game')

//GET BACK ALL THE GAMES
router.get('/', async (req, res) => {
    try {
        const games = await Game.find()
            //.populate("home_team_id", "-_id -__v -Team")
            //.populate("away_team_id", "-_id -__v -Team")
            ;
        res.json(returnSuccess(games));
    } catch (err) {
        res.json({ message: err });
        console.log(err)
    }
});

//SUBMIT A GAME
router.post('/', async (req, res) => {
    const game = new Game({
        home_team_id: req.body.home_team_id,
        away_team_id: req.body.away_team_id,
        tour: req.body.tour,
        away_team_name: req.body.away_team_name,
        home_team_name: req.body.home_team_name,
        match_day: req.body.match_day,
        game_status: req.body.game_status,
        away_goal: req.body.away_goal,
        home_goal: req.body.home_goal,
        home_penal: req.body.home_penal,
        away_penal: req.body.away_penal,
        league_id: req.body.league_id,
    });

    try {
        const savedGame = await game.save();
        res.json(returnSuccess(savedGame));
    } catch (err) {
        res.json({ message: err });
        console.log(err)
    }   
})

//GET GAMES FOR TEAM
// router.get('/:teamId', async (req, res) => {
//     try {
//         const games = await Games.findById(req.params.teamId)
//             .populate("home_team_id", "-_id -__v -Team")
//             .populate("away_team_id", "-_id -__v -Team");
//        res.json(returnSuccess(games));
//     } catch (err) {
//         res.json({ message: err });
//         console.log(err)
//     }
// });

//GET GAMES FOR LEAGUE
// router.get('/:leagueId', async (req, res) => {
//     try {
//         const games = await Games.findById(req.params.leagueId)
//             .populate("league_id", "-_id -__v -League");
//         res.json(returnSuccess(games));
//     } catch (err) {
//         res.json({ message: err });
//         console.log(err)
//     }
// });

//GET GAMES FOR DERBY
// router.get('/:firstTeamId/:secondTeamId', async (req, res) => {
//     try {
//         Games.find({
//             home_team_id: { $all: [req.params.firstTeamId, req.params.secondTeamId] },
//             away_team_id: { $all: [req.params.firstTeamId, req.params.secondTeamId] }
//         })
//             .populate("home_team_id", "-_id -__v -Team")
//             .populate("away_team_id", "-_id -__v -Team");
//         res.json(returnSuccess(games));
//     } catch (err) {
//         res.json({ message: err });
//         console.log(err)
//     }
// });

function returnSuccess(data){
    return {
		status: 200,
		timestamp: Date.now(),
		data: data
  };
}

module.exports = router;