angular.module('SmashStats')
.controller('AddFriendlyCtrl', function($rootScope, $scope, $http) {
	$rootScope.activePage = 'addFriendly';

	//List 1
	$scope.obj={character_selected : {'name':'Choose a character'}};
    $scope.character_list = [{'name': 'Fox', 'url': 'http://i.imgur.com/e6iqFph.png'},
    						{'name': 'Falco', 'url': 'http://i.imgur.com/agJbmfC.png'},
    						{'name': 'Sheik', 'url': 'http://i.imgur.com/LIUAHAS.png'},
    						{'name': 'Marth', 'url': 'http://i.imgur.com/z5Cffyx.png'},
    						{'name': 'C. Falcon', 'url': 'http://i.imgur.com/fcaKRdi.png'},
    						{'name': 'Jigglypuff', 'url': 'http://i.imgur.com/AzFEkw2.png'},
    						{'name': 'Ice Climbers', 'url': 'http://i.imgur.com/iHFuxww.png'},
    						{'name': 'Peach', 'url': 'http://i.imgur.com/fFLSjd8.png'},
    						{'name': 'Pikachu', 'url': 'http://i.imgur.com/2Hx56oI.png'},
    						{'name': 'Samus', 'url': 'http://i.imgur.com/Yd9DP9r.png'},
    						{'name': 'Dr. Mario', 'url': 'http://i.imgur.com/okOuokD.png'},
    						{'name': 'Yoshi', 'url': 'http://i.imgur.com/XskW1p3.png'},
    						{'name': 'Luigi', 'url': 'http://i.imgur.com/wLYWBU1.png'},
    						{'name': 'Mario', 'url': 'http://i.imgur.com/LpFs9JM.png'},
    						{'name': 'Link', 'url': 'http://i.imgur.com/xiPI350.png'},
    						{'name': 'Young Link', 'url': 'http://i.imgur.com/kLLb3Vf.png'},
    						{'name': 'Donkey Kong', 'url': 'http://i.imgur.com/YSdfwls.png'},
    						{'name': 'Ganon', 'url': 'http://i.imgur.com/l9xQfyT.png'},
    						{'name': 'Roy', 'url': 'http://i.imgur.com/dQqG9Ai.png'},
    						{'name': 'G&W', 'url': 'http://i.imgur.com/Hi7BeL2.png'},
    						{'name': 'Mewtwo', 'url': 'http://i.imgur.com/GJlkuaG.png'},
    						{'name': 'Zelda', 'url': 'http://i.imgur.com/dHTFDmd.png'},
    						{'name': 'Ness', 'url': 'http://i.imgur.com/NMg9v5g.png'},
    						{'name': 'Pichu', 'url': 'http://i.imgur.com/JEZXgZK.png'},
    						{'name': 'Bowser', 'url': 'http://i.imgur.com/Xc5TYpa.png'},
    						{'name': 'Kirby', 'url': 'http://i.imgur.com/D2834pg.png'}
    						];

    $scope.obj2={character_selected : {'name':'Choose a character'}};
    $scope.character_list2 = [{'name': 'Fox', 'url': 'http://i.imgur.com/e6iqFph.png'},
    						{'name': 'Falco', 'url': 'http://i.imgur.com/agJbmfC.png'},
    						{'name': 'Sheik', 'url': 'http://i.imgur.com/LIUAHAS.png'},
    						{'name': 'Marth', 'url': 'http://i.imgur.com/z5Cffyx.png'},
    						{'name': 'C. Falcon', 'url': 'http://i.imgur.com/fcaKRdi.png'},
    						{'name': 'Jigglypuff', 'url': 'http://i.imgur.com/AzFEkw2.png'},
    						{'name': 'Ice Climbers', 'url': 'http://i.imgur.com/iHFuxww.png'},
    						{'name': 'Peach', 'url': 'http://i.imgur.com/fFLSjd8.png'},
    						{'name': 'Pikachu', 'url': 'http://i.imgur.com/2Hx56oI.png'},
    						{'name': 'Samus', 'url': 'http://i.imgur.com/Yd9DP9r.png'},
    						{'name': 'Dr. Mario', 'url': 'http://i.imgur.com/okOuokD.png'},
    						{'name': 'Yoshi', 'url': 'http://i.imgur.com/XskW1p3.png'},
    						{'name': 'Luigi', 'url': 'http://i.imgur.com/wLYWBU1.png'},
    						{'name': 'Mario', 'url': 'http://i.imgur.com/LpFs9JM.png'},
    						{'name': 'Link', 'url': 'http://i.imgur.com/xiPI350.png'},
    						{'name': 'Young Link', 'url': 'http://i.imgur.com/kLLb3Vf.png'},
    						{'name': 'Donkey Kong', 'url': 'http://i.imgur.com/YSdfwls.png'},
    						{'name': 'Ganon', 'url': 'http://i.imgur.com/l9xQfyT.png'},
    						{'name': 'Roy', 'url': 'http://i.imgur.com/dQqG9Ai.png'},
    						{'name': 'G&W', 'url': 'http://i.imgur.com/Hi7BeL2.png'},
    						{'name': 'Mewtwo', 'url': 'http://i.imgur.com/GJlkuaG.png'},
    						{'name': 'Zelda', 'url': 'http://i.imgur.com/dHTFDmd.png'},
    						{'name': 'Ness', 'url': 'http://i.imgur.com/NMg9v5g.png'},
    						{'name': 'Pichu', 'url': 'http://i.imgur.com/JEZXgZK.png'},
    						{'name': 'Bowser', 'url': 'http://i.imgur.com/Xc5TYpa.png'},
    						{'name': 'Kirby', 'url': 'http://i.imgur.com/D2834pg.png'}
    						];
    $scope.win = function(player1){
		console.log($scope.obj.character_selected['name']);
	}

		$scope.lose = function(player2){
		console.log($scope.obj2.character_selected['name']);
	}


});
