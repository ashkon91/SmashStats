angular.module('SmashStats')
.controller('PracticeCtrl', function($rootScope, $scope, $stateParams, $interval) {
	$rootScope.activePage = 'practice';

    $scope.values = $stateParams;
    $scope.tech = $scope.values.tech;
    $scope.result = "";
    $scope.seconds = 60;
    $scope.percent = 0.0;
    $scope.stopTime;
    $scope.startTimer = function(){
        $scope.seconds = 60;
        if($scope.stopTime !== undefined){
            $interval.cancel($scope.stopTime);
            $scope.percent = 0.0;
        }

        $scope.stopTime = $interval($scope.decSeconds, 1000);
    }

    $scope.decSeconds = function(){
        $scope.seconds--;
        $scope.percent = (60-$scope.seconds)/60;
        if($scope.seconds == 0){
            $interval.cancel($scope.stopTime);
            $scope.openToast();
        }
    }

    $scope.openToast = function(){
        $scope.result= "FINISHED!!!"
		var x = document.getElementById("snackbar2")
		x.className = "show";
		setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);


	}

});
