const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const Team = require('../models/Team')

//GET BACK ALL THE TEAMS
router.get('/', async (req, res) => {
    try {
        const teams = await Team.find();
        res.json(returnSuccess(teams));
    } catch (err) {
        res.json({ message: err });
        console.log(err)
    }
});

//SUBMIT A TEAM
router.post('/', async (req, res) => {
    const team = new Team({
        team_last_name: req.body.team_last_name,
        team_logo_url: req.body.team_logo_url,
        team_city: req.body.team_city
    });

    try {
        const savedTeam = await team.save();
        res.json(returnSuccess(leagues));
    } catch (err) {
        res.json({ message: err });
        console.log(err)
    }
})

function returnSuccess(data){
    return {
		status: 200,
		timestamp: Date.now(),
		data: data
  };
}

module.exports = router;