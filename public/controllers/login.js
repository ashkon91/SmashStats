angular.module('SmashStats')
.controller('LoginCtrl', function($rootScope, $scope, $state) {
	$rootScope.activePage = 'login';
	$scope.login = function(username,password) {
		if(username == "admin", password == "password"){
			$rootScope.isLoggedIn = true;
			$state.go('home',{});
		}
	}

});
