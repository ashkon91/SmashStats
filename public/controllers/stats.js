angular.module('SmashStats')
.controller('StatsCtrl', function($rootScope, $scope, $http,SmashServices) {
	$rootScope.activePage = 'stats';

	$scope.notFilled = true;
	$scope.user = 'Admin';
	$scope.results = {};
	$scope.character_list = [
	{'name': 'All Characters', 'url' :'https://upload.wikimedia.org/wikipedia/commons/4/49/Smash_Ball.png', 'tier': ''},
	{'name': 'Fox', 'url': 'https://i.imgur.com/e6iqFph.png', 'tier': 'SS'},
	{'name': 'Falco', 'url': 'https://i.imgur.com/agJbmfC.png', 'tier': 'S'},
	{'name': 'Sheik', 'url': 'https://i.imgur.com/LIUAHAS.png', 'tier': 'S'},
	{'name': 'Marth', 'url': 'https://i.imgur.com/z5Cffyx.png', 'tier': 'S'},
	{'name': 'Jigglypuff', 'url': 'https://i.imgur.com/AzFEkw2.png', 'tier': 'A'},
	{'name': 'C. Falcon', 'url': 'https://i.imgur.com/fcaKRdi.png', 'tier': 'B'},
	{'name': 'Ice Climbers', 'url': 'https://i.imgur.com/iHFuxww.png', 'tier': 'B'},
	{'name': 'Peach', 'url': 'https://i.imgur.com/fFLSjd8.png', 'tier': 'A'},
	{'name': 'Pikachu', 'url': 'https://i.imgur.com/2Hx56oI.png', 'tier': 'C'},
	{'name': 'Samus', 'url': 'https://i.imgur.com/Yd9DP9r.png', 'tier': 'C'},
	{'name': 'Dr. Mario', 'url': 'https://i.imgur.com/okOuokD.png', 'tier': 'D'},
	{'name': 'Yoshi', 'url': 'https://i.imgur.com/XskW1p3.png', 'tier': 'D'},
	{'name': 'Luigi', 'url': 'https://i.imgur.com/wLYWBU1.png', 'tier': 'D'},
	{'name': 'Mario', 'url': 'https://i.imgur.com/LpFs9JM.png', 'tier': 'E'},
	{'name': 'Link', 'url': 'https://i.imgur.com/xiPI350.png', 'tier': 'E'},
	{'name': 'Young Link', 'url': 'https://i.imgur.com/kLLb3Vf.png', 'tier': 'E'},
	{'name': 'Donkey Kong', 'url': 'https://i.imgur.com/YSdfwls.png', 'tier': 'E'},
	{'name': 'Ganon', 'url': 'https://i.imgur.com/l9xQfyT.png', 'tier': 'E'},
	{'name': 'Roy', 'url': 'https://i.imgur.com/dQqG9Ai.png', 'tier': 'F'},
	{'name': 'G&W', 'url': 'https://i.imgur.com/Hi7BeL2.png', 'tier': 'F'},
	{'name': 'Mewtwo', 'url': 'https://i.imgur.com/GJlkuaG.png', 'tier': 'F'},
	{'name': 'Zelda', 'url': 'https://i.imgur.com/dHTFDmd.png', 'tier': 'F'},
	{'name': 'Ness', 'url': 'https://i.imgur.com/NMg9v5g.png', 'tier': 'F'},
	{'name': 'Pichu', 'url': 'https://i.imgur.com/JEZXgZK.png', 'tier': 'G'},
	{'name': 'Bowser', 'url': 'https://i.imgur.com/Xc5TYpa.png', 'tier': 'G'},
	{'name': 'Kirby', 'url': 'https://i.imgur.com/D2834pg.png', 'tier': 'G'}
	];

	$scope.radarLabels = ["Battlefield", "Dreamland", "Final Destination", "Fountain of Dreams", "Yoshi's Story", "Pokemon Stadium"];
	

	$scope.stage_list = [
	{'name': 'All Stages', 'url' :'https://upload.wikimedia.org/wikipedia/commons/4/49/Smash_Ball.png'},
	{'name': 'Battlefield', 'url': 'https://www.ssbwiki.com/images/d/de/Battlefieldssbm.jpg'},
	{'name': 'Dreamland', 'url': 'https://www.ssbwiki.com/images/2/25/SSB4UDreamLand64.png'},
	{'name': 'Final Destination', 'url': 'https://www.ssbwiki.com/images/9/98/Finaldestination.jpg'},
	{'name': 'Fountain of Dreams', 'url': 'https://www.ssbwiki.com/images/0/01/Fountainofdreams.jpg'},
	{'name': "Yoshi's Story", 'url': 'https://www.ssbwiki.com/images/1/1a/Yoshi%27sStory.PNG'},
	{'name': 'Pokemon Stadium', 'url': 'https://www.ssbwiki.com/images/2/2b/Pokemonstadium.jpg'},
	];
	SmashServices.getJSON(function(response){
		console.log(response.data);

		jsonResults = response.data[$scope.user];
		$scope.stageStats = jsonResults.Stage;

		$scope.opponent_list = getOpponents(response, $scope.user);
		
		//console.log($scope.opponent_list);
		//console.log(response.data[$scope.user].Opponents);
	}, function(error){
		console.log("ERROR");
	});

	/*$http.get('../data.json')
	.then(function(data){
			$scope.names = [];
			for(val in data.data.Name){
				$scope.names.push(val);
			}
			console.log(data.data);
			console.log(data.data.Name["Ashkon"].Character["Fox"].Stage["Battlefield"]);
			$scope.wins = data.data.Name["Ashkon"].Character["Fox"].Stage["Battlefield"].wins;
			$scope.losses = data.data.Name["Ashkon"].Character["Fox"].Stage["Battlefield"].losses;
			$scope.someshit = "THUIEJOPKAKSJFBOPSNAM";
			console.log(data.data.Name["Ashkon"].Character["Fox"].Stage["Battlefield"].wins);

	})
	*/
	$scope.change = function(){
		if($scope.results.user_char_selected['name'] == undefined || $scope.results.opp_char_selected['name'] == undefined || $scope.results.opponent['name'] == undefined){
			//console.log("TEST");
		} else {
			$scope.notFilled = false;
			getResults($scope.results.opponent['name'], $scope.results.user_char_selected['name'], $scope.results.opp_char_selected['name']);
		}
		console.log(gameRest);
		
		console.log($scope.radarData);

	}

	function getResults(user, char, opChar){
		SmashServices.getJSON(function(response){
			var collectedData = {
				"Battlefield" : {
					"win": 0,
					"loss": 0
				},
				"Final Destination" : {
					"win": 0,
					"loss": 0
				},
				"Dreamland" : {
					"win": 0,
					"loss": 0
				},
				"Yoshi's Story" : {
					"win": 0,
					"loss": 0
				},
				"Pokemon Stadium" : {
					"win": 0,
					"loss": 0
				},
				"Fountain of Dreams" : {
					"win": 0,
					"loss": 0
				}
			}
			for(op in response.data[$scope.user].Opponents){
				if(op == user || user == "All Opponents"){
					matches = response.data[$scope.user].Opponents[op];
					for(matchid in matches){
						for(matchC in matches[matchid]){
							match = matches[matchid][matchC];
							if( ( match['uChar'] == char || char == "All Characters") && (match['oChar'] == opChar || opChar =="All Characters")){
								collectedData[match['stage']][match['result']] += 1;
							}
						}
					}
				}
			}

			formatResults(collectedData);


		}, function(error){
			console.log("ERROR");
		});
	}

	function formatResults(data){
		var gameRest = {};
		for(stage in data){
			win = data[stage]['win'];
			total = data[stage]['loss'] + win;
			gameRest[stage] = (win/total) * 100;
		}
		console.log(gameRest);
		$scope.radarData =[
		[gameRest['Battlefield'], gameRest['Dreamland'], gameRest['Dreamland'], gameRest['Final Destination'], gameRest['Fountain of Dreams'], gameRest["Yoshi's Story"],  gameRest['Pokemon Stadium']]
		];
	}


});

function getOpponents(response, user){
	opponent_list = [];
	opponent_list.push({'name' : 'All Opponents'});
	for(val in response.data[user].Opponents){
		opponent_list.push({'name': val});
	}
	return opponent_list
}



