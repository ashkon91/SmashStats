var data = require('../data.json')
module.exports = function(req,res){
    var body = req.body;
    console.log(body);
    //console.log(data.Name[body.Name].Character[body.Character].Stage[body.Stage].win++);
    //console.log(data.Name[body.Name].Character[body.Character].Stage[body.Stage].win);

    if(!data.hasOwnProperty(body.user)){
        data[body.user] = {
    		"Stage" : {
    			"Battlefield": {
    				"win": 0,
    				"loss" : 0
    			},
    			"Final Destination" : {
    				"win": 0,
    				"loss" : 0
    			},
    			"Dreamland" : {
    				"win" : 0,
    				"loss" : 0
    			},
    			"Yoshi's Story" : {
    				"win" : 0,
    				"loss" : 0
    			},
    			"Pokemon Stadium" : {
    				"win" : 0,
    				"loss" : 0
    			},
    			"Fountain of Dreams" : {
    				"win" : 0,
    				"loss" : 0
    			}
    		},
    		"Opponents": {}
    	}
    }



    console.log(data[body.user])
    // increment win/loss for stage
	data[body.user]['Stage'][body.stage][body.result]++;


    if(!data[body.user]['Opponents'].hasOwnProperty(body.opp)){
        console.log("making new opponent")
        data[body.user]['Opponents'][body.opp] = {"Matches": []}
        console.log("NEWDATA: ", data[body.user])
    }
    jsonObj = {
        "uChar": body.uChar,
        "oChar": body.oChar,
        "stage": body.stage,
        "result":body.result
    }

    data[body.user]['Opponents'][body.opp]['Matches'].push(jsonObj)


    res.status(200).send();
}
