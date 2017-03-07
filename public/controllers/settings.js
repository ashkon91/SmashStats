angular.module('SmashStats')
.controller('SettingsCtrl', function($rootScope, $scope, $state, Auth) {
	$rootScope.activePage = 'settings';

	$scope.logout = function(){
		Auth.$signOut().then(function() {
		  // Sign-out successful.
		  	$rootScope.loggedIn = false;
		  	$state.go('login');
		}, function(error) {
		  // An error happened.
		  console.log("Error:", error)
		});

	}
});
