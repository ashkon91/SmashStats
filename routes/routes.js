var express = require('express');

var appRouter = express.Router();



var getTech = require(__dirname + '/../public/js/getTech.js');

appRouter.post("/getTech", getTech);

var pushJSON = require(__dirname + '/../public/js/pushJSON.js');

appRouter.post("/pushJSON", pushJSON);

var getJSON = require(__dirname + '/../public/js/getJSON.js');

appRouter.get("/getJSON", getJSON);

module.exports = appRouter;
