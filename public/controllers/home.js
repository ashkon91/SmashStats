angular.module('SmashStats')
.controller('HomeCtrl', function($rootScope, $scope, Auth, $timeout) {
	$rootScope.activePage = 'home';

	$scope.auth = Auth;


	$scope.exp ="addFriendly";
	if($rootScope.variation == 1){
		$scope.exp ="addFriendlyRe";
	}

});
