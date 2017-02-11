angular.module('SmashStats')
.controller('TechCtrl', function($rootScope, $scope, $stateParams) {
	$rootScope.activePage = 'tech';
    console.log($stateParams);
	$scope.values = $stateParams;
    $scope.tech = $scope.values.tech;


});
