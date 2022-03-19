const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const Level = require('../models/Level')

//GET BACK ALL THE LEVELS
router.get('/', async (req, res) => {
    try {
        const levels = await Level.find();
        res.json(returnSuccess(levels));
    } catch (err) {
        res.json({ message: err });
        console.log(err)
    }
});

//SUBMIT A Level
router.post('/', async (req, res) => {
    const level = new Level({
        order: req.body.order,
        format: req.body.format,
        last_name: req.body.last_name
    });

    try {
        const savedLevel = await level.save();
        res.json(returnSuccess(savedLevel));
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