var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//app.use(express.static(__dirname + '/public'));
app.use('/', express.static(__dirname + '/public'));
var routes = require("./routes/routes");

app.use('/api', routes);


var server = app.listen(port, function () {
    console.log("Listening on port %s...", server.address().port);
});


module.exports = app;
