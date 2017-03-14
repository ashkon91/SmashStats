angular.module('SmashStats')
.controller('AddFriendlyCtrl', function($rootScope, $scope, $http, SmashServices, Auth) {
	$rootScope.activePage = 'addFriendly';
	$scope.user = Auth.$getAuth();
	$scope.warning = "Please fill all the fields and then confirm.";
	$scope.notFilled = true;


	//form ng-model
	$scope.results={};
	//List 1
    $scope.character_list = [{'name': 'Fox', 'url': 'https://i.imgur.com/e6iqFph.png', 'tier': 'SS'},
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


    $scope.stage_list = [{'name': 'Battlefield', 'url': 'https://www.ssbwiki.com/images/d/de/Battlefieldssbm.jpg'},
    {'name': 'Dreamland', 'url': 'https://www.ssbwiki.com/images/2/25/SSB4UDreamLand64.png'},
    {'name': 'Final Destination', 'url': 'https://www.ssbwiki.com/images/9/98/Finaldestination.jpg'},
    {'name': 'Fountain of Dreams', 'url': 'https://www.ssbwiki.com/images/0/01/Fountainofdreams.jpg'},
    {'name': "Yoshi's Story", 'url': 'https://www.ssbwiki.com/images/1/1a/Yoshi%27sStory.PNG'},
    {'name': 'Pokemon Stadium', 'url': 'https://www.ssbwiki.com/images/2/2b/Pokemonstadium.jpg'},
    ];

	$scope.matchResult = "";


	$scope.openToast = function(){
		var x = document.getElementById("snackbar")
		x.className = "show";
		setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
		if($scope.results.result == 'win'){
			$scope.matchResult = $scope.results.user_char_selected['name'] + " beat " + $scope.results.opp_char_selected['name'] + " on " + $scope.results.stage['name'];
		}
		else{
			$scope.matchResult = $scope.results.opp_char_selected['name'] + " beat " + $scope.results.user_char_selected['name'] + " on " + $scope.results.stage['name'];
		}
		console.log($scope.matchResult);
	}

  $scope.reportWin = function(player1){
		if(!$scope.results.user_char_selected){
			$scope.warning = "Please select your character.";
		}
		else if(!$scope.results.opp_char_selected){
			$scope.warning = "Please select your opponent's character.";
		}
		else if(!$scope.results.stage){
			$scope.warning = "Please select a stage.";
		}
		else if(!$scope.results.opp_name){
			$scope.notFilled = true;
			$scope.warning = "Please specify an opponent.";
		}
		else if(!$scope.results.result){
			$scope.warning = "Please select win or lose.";
		}
		else{
			$scope.notFilled = false;
      var result = {
				user: $scope.user.displayName,
				opp: $scope.results.opp_name,
				uChar: $scope.results.user_char_selected['name'],
				oChar: $scope.results.opp_char_selected['name'],
				stage: $scope.results.stage['name'],
				result: $scope.results.result
      }
	      SmashServices.pushJSON(result, function(success){
						console.log(result);
	          console.log("SUCCESS");
	      }, function(error){
	          console.log("ERROR");
	      });

				$scope.openToast();
			}

  }

$scope.buttonStyle="btn-primary";

$scope.highlightConfirm = function(){
		if($scope.results.user_char_selected && $scope.results.opp_char_selected && $scope.results.stage && $scope.results.opp_name && $scope.results.result){
			$scope.buttonStyle="confirmbutton";
		}
		else{
			$scope.buttonStyle="btn-primary";
		}
}

$scope.trackStageChange = function(){
	Analytics.trackEvent('stage', 'change', 'stageChange');
}


});
