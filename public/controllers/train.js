angular.module('SmashStats')
.controller('TrainCtrl', function($rootScope, $scope) {
	$rootScope.activePage = 'train';
	$scope.difficultySelected = "Choose your difficulty";
	$scope.diffClicked = function() {
		console.log("TEST");
		$scope.difficultySelected = "BUTTON CLICKED";
	}
});
