angular.module('SmashStats')
.controller('AddPracCtrl', function($rootScope, $scope) {
	$rootScope.activePage = 'addPrac';
	$scope.difficultySelected = "Choose your difficulty";
	$scope.diffClicked = function(val) {
		console.log(val);
		$scope.difficultySelected = val + " difficulty routine chosen.";
	}

});
