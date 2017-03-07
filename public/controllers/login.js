angular.module('SmashStats')
.controller('LoginCtrl', function($rootScope, $scope, $state, $stateParams, Auth, $timeout) {

	$scope.auth = Auth;
	$rootScope.activePage="login";

	$scope.credentials = {
		"email": "",
		"password": ""
	}


	// any time auth state changes, add the user data to scope
	$scope.auth.$onAuthStateChanged(function(firebaseUser) {
	  $scope.firebaseUser = firebaseUser;
	});


	$scope.signInEmail = function() {
		$scope.auth.$signInWithEmailAndPassword($scope.credentials.email, $scope.credentials.password)
		.then(function(firebaseUser) {
		  console.log("Signed in as:", firebaseUser.uid);
		  $state.go('home');
		}).catch(function(error) {
		  console.error("Authentication failed:", error);
		});
	}
	$scope.signInGoogle = function() {
		console.log("hello")
		$scope.auth.$signInWithPopup('google').then(function(result) {
		  console.log("Signed in as:", result.user.uid);
		  $state.go('home');
		}).catch(function(error) {
		  console.error("Authentication failed:", error);
		});
	}

	var firebaseUser = $scope.auth.$getAuth();
	if (firebaseUser) {
	  console.log("Signed in as:", firebaseUser.uid);
	  console.log("Name", firebaseUser.displayName);
	  $rootScope.isLoggedIn = true;
	  $state.go('home');
	} else {
	  console.log("Signed out");
	}

});
