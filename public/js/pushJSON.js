var data = require('../data.json')
module.exports = function(req,res){
    var body = req.body;
    //console.log(body);
    //console.log(data.Name[body.Name].Character[body.Character].Stage[body.Stage].wins++);
    //console.log(data.Name[body.Name].Character[body.Character].Stage[body.Stage].wins);
	console.log(data.Name[body.Name].Character[body.Character].Stage[body.Stage].wins);
	if(data.Name[body.Name].Character[body.Character].Stage[body.Stage].wins){
		console.log("NEW11");
		data.Name[body.Name].Character[body.Character].Stage[body.Stage].wins += 1;
	}
	else{
		console.log("ELSE111");
		data.Name[body.Name].Character[body.Character].Stage[body.Stage].wins = 1;
	}
	console.log("AFTER" + data.Name[body.Name].Character[body.Character].Stage[body.Stage].wins);

    res.status(200).send();
}
