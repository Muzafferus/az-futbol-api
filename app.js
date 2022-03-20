const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

const cors = require('cors');
const port = process.env.PORT || 3164;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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

// Routes
app.get('/', (req, res) => {
    res.send('We are on home')
});

//How to we start listening to the server
app.listen(port);