angular.module('SmashStats')
.controller('HomeCtrl', function($rootScope, $scope) {
	$rootScope.activePage = 'home';
	$rootScope.isLoggedIn = true;

	$scope.exp ="addFriendly";
	if($rootScope.variation == 1){
		$scope.exp ="addFriendlyRe";
	}
});
