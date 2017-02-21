angular.module('SmashStats')
.controller('LoginCtrl', function($rootScope, $scope, $state, $stateParams) {
	$rootScope.activePage = 'login';
	$scope.isNewUser = false;
	$scope.failedLogin = false;
	$scope.errorText = "";

	if($stateParams.from == "registerPage"){
		$scope.errorText = "Welcome " + $stateParams.who + "! Please enter your username and password to login."
	}

	console.log($stateParams.from);
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
