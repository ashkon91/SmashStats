angular.module('SmashStats')
.controller('AddFriendlyCtrl', function($rootScope, $scope, $http, SmashServices) {
	$rootScope.activePage = 'addFriendly';


	//form ng-model
	$scope.results={};
	//List 1
    $scope.character_list = [{'name': 'Fox', 'url': 'http://i.imgur.com/e6iqFph.png', 'tier': 'SS'},
    {'name': 'Falco', 'url': 'http://i.imgur.com/agJbmfC.png', 'tier': 'S'},
    {'name': 'Sheik', 'url': 'http://i.imgur.com/LIUAHAS.png', 'tier': 'S'},
    {'name': 'Marth', 'url': 'http://i.imgur.com/z5Cffyx.png', 'tier': 'S'},
    {'name': 'C. Falcon', 'url': 'http://i.imgur.com/fcaKRdi.png', 'tier': 'B'},
    {'name': 'Jigglypuff', 'url': 'http://i.imgur.com/AzFEkw2.png', 'tier': 'A'},
    {'name': 'Ice Climbers', 'url': 'http://i.imgur.com/iHFuxww.png', 'tier': 'B'},
    {'name': 'Peach', 'url': 'http://i.imgur.com/fFLSjd8.png', 'tier': 'A'},
    {'name': 'Pikachu', 'url': 'http://i.imgur.com/2Hx56oI.png', 'tier': 'C'},
    {'name': 'Samus', 'url': 'http://i.imgur.com/Yd9DP9r.png', 'tier': 'C'},
    {'name': 'Dr. Mario', 'url': 'http://i.imgur.com/okOuokD.png', 'tier': 'D'},
    {'name': 'Yoshi', 'url': 'http://i.imgur.com/XskW1p3.png', 'tier': 'D'},
    {'name': 'Luigi', 'url': 'http://i.imgur.com/wLYWBU1.png', 'tier': 'D'},
    {'name': 'Mario', 'url': 'http://i.imgur.com/LpFs9JM.png', 'tier': 'E'},
    {'name': 'Link', 'url': 'http://i.imgur.com/xiPI350.png', 'tier': 'E'},
    {'name': 'Young Link', 'url': 'http://i.imgur.com/kLLb3Vf.png', 'tier': 'E'},
    {'name': 'Donkey Kong', 'url': 'http://i.imgur.com/YSdfwls.png', 'tier': 'E'},
    {'name': 'Ganon', 'url': 'http://i.imgur.com/l9xQfyT.png', 'tier': 'E'},
    {'name': 'Roy', 'url': 'http://i.imgur.com/dQqG9Ai.png', 'tier': 'F'},
    {'name': 'G&W', 'url': 'http://i.imgur.com/Hi7BeL2.png', 'tier': 'F'},
    {'name': 'Mewtwo', 'url': 'http://i.imgur.com/GJlkuaG.png', 'tier': 'F'},
    {'name': 'Zelda', 'url': 'http://i.imgur.com/dHTFDmd.png', 'tier': 'F'},
    {'name': 'Ness', 'url': 'http://i.imgur.com/NMg9v5g.png', 'tier': 'F'},
    {'name': 'Pichu', 'url': 'http://i.imgur.com/JEZXgZK.png', 'tier': 'G'},
    {'name': 'Bowser', 'url': 'http://i.imgur.com/Xc5TYpa.png', 'tier': 'G'},
    {'name': 'Kirby', 'url': 'http://i.imgur.com/D2834pg.png', 'tier': 'G'}
    ];


    $scope.stage_list = [{'name': 'Battlefield', 'url': 'https://www.ssbwiki.com/images/d/de/Battlefieldssbm.jpg'},
    {'name': 'Dream Land', 'url': 'https://www.ssbwiki.com/images/2/25/SSB4UDreamLand64.png'},
    {'name': 'Final Destination', 'url': 'https://www.ssbwiki.com/images/9/98/Finaldestination.jpg'},
    {'name': 'Fountain of Dreams', 'url': 'https://www.ssbwiki.com/images/0/01/Fountainofdreams.jpg'},
    {'name': 'Yoshis Story', 'url': 'https://www.ssbwiki.com/images/1/1a/Yoshi%27sStory.PNG'},
    {'name': 'Pokemon Stadium', 'url': 'https://www.ssbwiki.com/images/2/2b/Pokemonstadium.jpg'},
    ];

	$scope.matchResult = "";


	$scope.openToast = function(){
		var x = document.getElementById("snackbar")
		x.className = "show";
		setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
		if($scope.results.result == 'win'){
			$scope.matchResult = $scope.results.user_char_selected['name'] + " beat " + $scope.results.opp_char_selected['name'] + " on " + $scope.stageobj.stage_selected['name'];
			$scope.reportWin();
		}
		else{
			$scope.matchResult = $scope.results.opp_char_selected['name'] + " beat " + $scope.results.user_char_selected['name'] + " on " + $scope.stageobj.stage_selected['name'];
            $scope.reportWin();
		}
		console.log($scope.matchResult);
	}

  $scope.reportWin = function(player1){

      var result = {
          Name: "Ashkon",
          Character: $scope.results.user_char_selected['name'],
          Stage: $scope.results.stage['name'],
          Result: $scope.results.result == 'win'
      }
	  console.log($scope.results.result)

      console.log(result);
      SmashServices.pushJSON(result, function(success){
          console.log("SUCCESS");
      }, function(error){
          console.log("ERROR");
      });

  }


});
