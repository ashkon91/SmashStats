angular.module('SmashStats')
.controller('TechCtrl', function($rootScope, $scope, $stateParams) {
	$rootScope.activePage = 'tech';
    console.log($stateParams);
	$scope.values = $stateParams;
    $scope.tech = $scope.values.tech;



	$scope.getVideoUrl = function(){
		return "https://thumbs.gfycat.com/" + $scope.tech.gifs[0].url + "-poster.jpg";
	}


	$scope.getSourceWebUrl = function(){
		return "https://zippy.gfycat.com/" + $scope.tech.gifs[0].url + ".webm";
	}

	$scope.getSourceMP4Url = function(){
		return "https://zippy.gfycat.com/" + $scope.tech.gifs[0].url + ".mp4";
	}


})
.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);
