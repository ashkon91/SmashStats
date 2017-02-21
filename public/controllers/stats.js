angular.module('SmashStats')
.controller('StatsCtrl', function($rootScope, $scope, $http,SmashServices) {
	$rootScope.activePage = 'stats';

	$scope.user = 'Admin';
	SmashServices.getJSON(function(response){
		console.log(response.data);

		jsonResults = response.data[$scope.user];
		$scope.stageStats = jsonResults.Stage;
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
});
