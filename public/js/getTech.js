request = require('request');

module.exports = function(req,res){
    var body = req.body;
    var tech = request.get('http://smashlounge.com/api/techs/all', function(err, resp, body){
        if (!err && resp.statusCode == 200){
            res.status(200).send(body)
        }
        else{
            res.status(409).send();
        }
    });



}
