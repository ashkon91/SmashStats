angular.module('SmashStats')
.controller('RegisterCtrl', function($rootScope, $scope, $state) {
	$rootScope.activePage = 'register';

	$scope.validInput = false;
	$scope.errorText = "";
	$scope.freshusername = "";

	$scope.register = function(username, password1, password2){
		// console.log((""+username).length);
		if((""+username).length < 4){
			$scope.errorText = "Username must be longer than 4 characters";
		}
		else if((""+password1).length < 7 || (""+password2).length < 7){
			$scope.errorText = "Password must be longer than 6 characters.";
		}
		else if(""+password1 != ""+password2){
			$scope.errorText = "Passwords do not match!";
		}
		else{
			$scope.validInput = true;
			$scope.freshusername = ""+username;
		}

		console.log($scope.validInput);
		if($scope.validInput == true){
			$state.go('login', {from: "registerPage", who: $scope.freshusername});
		}
	}

});
