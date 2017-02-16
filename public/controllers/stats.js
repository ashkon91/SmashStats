angular.module('SmashStats')
.controller('StatsCtrl', function($rootScope, $scope, $http) {
	$rootScope.activePage = 'stats';
	$http.get('../data.json')
	.then(function(data){
			$scope.names = [];
			for(val in data.data.Name){
				$scope.names.push(val);
			}
			
			console.log(data.data.Name["Ashkon"].Character["Fox"].Stage["Battlefield"]);
			$scope.wins = data.data.Name["Ashkon"].Character["Fox"].Stage["Battlefield"].wins;
			$scope.losses = data.data.Name["Ashkon"].Character["Fox"].Stage["Battlefield"].losses;
			$scope.someshit = "THUIEJOPKAKSJFBOPSNAM";

	})

});
