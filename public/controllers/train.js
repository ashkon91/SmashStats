angular.module('SmashStats')
.controller('TrainCtrl', function($rootScope, $scope) {
	$rootScope.activePage = 'train';
	$scope.difficultySelected = "Choose your difficulty";
	$scope.diffClicked = function(val) {
		console.log(val);
		$scope.difficultySelected = val + " difficulty routine chosen.";
	}
});
