var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

//app.use(express.static(__dirname + '/public'));
app.use('/', express.static(__dirname + '/public'));

var server = app.listen(8080, function () {
    console.log("Listening on port %s...", server.address().port);
});


module.exports = app;
