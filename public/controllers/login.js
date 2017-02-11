angular.module('SmashStats')
.controller('LoginCtrl', function($rootScope, $scope, $state) {
	$rootScope.activePage = 'login';
	$scope.isNewUser = false;
	$scope.failedLogin = false;
	$scope.errorText = "";
	$scope.login = function(username,password) {
		console.log(password);
		if(username == "admin", password == "password"){
			$state.go('home',{});
		}else if((username == undefined || username == "") && (password == undefined || password == "")){
			$scope.failedLogin = true;
			$scope.errorText = "Please enter a valid username & password!";
		}else if(username == undefined || username == ""){
			$scope.failedLogin = true;
			$scope.errorText = "Please enter a valid username!";
		}else if(password == undefined || password == ""){
			$scope.failedLogin = true;
			$scope.errorText = "Please enter a valid password!";
		}else{
			$scope.failedLogin = true;
			$scope.errorText = "Username and password combination is not valid!";
		}
		
	}
	$scope.newUser = function(username,password){
		$scope.isNewUser = true;
	}


});
