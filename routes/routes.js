var express = require('express');

var appRouter = express.Router();



var getTech = require(__dirname + '/../public/js/getTech.js');

appRouter.post("/getTech", getTech);

module.exports = appRouter;
