angular.module('SmashStats')
.controller('PracticeCtrl', function($rootScope, $scope, $stateParams, $interval) {
	$rootScope.activePage = 'practice';

    $scope.values = $stateParams;
    $scope.tech = $scope.values.tech;
    $scope.result = "";
    $scope.seconds = 60;
    $scope.percent = 0.0;
    $scope.stopTime;
		$scope.toggleTime = 1;
		$scope.totalTime = 60;

    $scope.startTimer = function(){
        if($scope.stopTime !== undefined){
            $interval.cancel($scope.stopTime);
        }

        $scope.stopTime = $interval($scope.decSeconds, 1000);
    }

    $scope.decSeconds = function(){
        $scope.seconds--;
        $scope.percent = ($scope.totalTime-$scope.seconds)/$scope.totalTime;
        if($scope.seconds == 0){
            $interval.cancel($scope.stopTime);
            $scope.openToast();
        }
    }

    $scope.openToast = function(){
        $scope.result= "FINISHED!!!"
		var x = document.getElementById("snackbar2")
		x.className = "show";
		setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);


	}

	$scope.setTimer = function(){
		if($scope.toggleTime == 0){
				$scope.seconds = 60;
				$scope.totalTime = 60;
				$scope.toggleTime++;
		}
		else if($scope.toggleTime == 1){
				$scope.seconds = 120;
				$scope.totalTime = 120;
				$scope.toggleTime++;
		}
		else{
				$scope.seconds = 180;
				$scope.totalTime = 180;
				$scope.toggleTime = 0;
		}
	}

	$scope.stopTimer = function(){
		$interval.cancel($scope.stopTime);
	}

});
