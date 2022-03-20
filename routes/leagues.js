const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const League = require('../models/League')

//GET BACK ALL THE LEAGUES
router.get('/', async (req, res) => {
    try {
        const leagues = await League.find();
        res.json(returnSuccess(leagues));
    } catch (err) {
        res.json({ message: err });
        console.log(err)
    }
});

//SUBMIT A LEAGUES
router.post('/', async (req, res) => {
    const league = new League({
        name: req.body.name,
        start_year: req.body.start_year,
        finish_year: req.body.finish_year,
        team_size: req.body.team_size,
        level_id: req.body.level_id
    });

    try {
        const savedLeague = await league.save();
        res.json(returnSuccess(savedLeague));
    } catch (err) {
        res.json({ message: err });
        console.log(err)
    }
})

function returnSuccess(data) {
    return {
        status: 200,
        timestamp: Date.now(),
        data: data
    };
}

module.exports = router;