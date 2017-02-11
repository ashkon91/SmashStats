angular.module('SmashStats')
.controller('HomeCtrl', function($rootScope, $scope) {
	$rootScope.activePage = 'home';
	$rootScope.isLoggedIn = true;

});
