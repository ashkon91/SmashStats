angular.module('SmashStats')
.controller('HomeCtrl', function($rootScope, $scope, Auth, $timeout) {
	$rootScope.activePage = 'home';

	$scope.auth = Auth;
});
