const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cors = require('cors');
const port = process.env.port || 3164

require('dotenv/config');

//Middlewares
app.use(cors(), bodyParser.json());

//Import Routes
const gamesRoute = require('./routes/games');
const levelsRoute = require('./routes/level');
const teamsRoute = require('./routes/teams');
const leaguesRoute = require('./routes/leagues');
app.use('/games', gamesRoute);
app.use('/levels', levelsRoute);
app.use('/teams', teamsRoute);
app.use('/leagues', leaguesRoute);

//Connect to Database
mongoose.connect(
    process.env.DB_CONNECTION,
    () => {
        console.log('connected')
    })

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home')
});

//How to we start listening to the server
app.listen(port);