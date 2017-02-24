angular.module('SmashStats')
.controller('SettingsCtrl', function($rootScope, $scope, $state) {
	$rootScope.activePage = 'settings';

	$scope.logout = function(){
		$rootScope.isLoggedIn = false;
		$state.go('login');
	}
});
