angular.module('SmashStats')
.controller('TrainCtrl', function($rootScope, $scope, SmashServices, $state) {
	$rootScope.activePage = 'train';

	$scope.techs;

	SmashServices.getTech(
		{id: 'all'},
		function(response){
			var rd = response.data;
			$scope.techs = rd;
		},
		function(error){
			console.log(error);
		}
	);

	$scope.openTech = function(data){
		console.log(data);
		$state.go('tech', {tech: data});
	}



});
