require('request');

module.exports = function(req,res){
    var tech = request.get('http://smashlounge.com/api/chars/' + req.body.id)

	res.status(200).send(tech);
}
