var data = require('../data.json')
module.exports = function(req,res){
    var body = req.body;
    console.log(body);
    //console.log(data.Name[body.Name].Character[body.Character].Stage[body.Stage].wins++);
    //console.log(data.Name[body.Name].Character[body.Character].Stage[body.Stage].wins);
	if(data.Name[body.Name].Character[body.Character].Stage[body.Stage]){
		if(body.Result == true){
			data.Name[body.Name].Character[body.Character].Stage[body.Stage].wins += 1;
		}
		else{
			console.log("LOSS");
			data.Name[body.Name].Character[body.Character].Stage[body.Stage].losses += 1;
		}

	}
	else{
		data.Name[body.Name].Character[body.Character].Stage[body.Stage].wins = 1;
	}

    res.status(200).send();
}
