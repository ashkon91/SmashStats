angular.module('SmashStats')
.factory('SmashServices', function($http){
	var API_URL = 'http://localhost:8080/api';
	return {
        exampleGet: function(success, error) {
            var req = {
                method: 'GET',
                url: '/exampleGet',
            };
            this.apiCall(req, success, error);
        },
        getTech: function(dataObj, success, error) {
            var req = {
                method: 'POST',
                url: '/getTech',
                data: dataObj
            };
            this.apiCall(req, success, error);
        },
        apiCall: function(req, success, error) {
            req.url = API_URL + req.url;
            $http(req)
            .then(function successCallback(response) {
                console.log(response);
                success(response);
            }, function errorCallback(response) {
                error(response);
                //console.log(response);
            });
        }
    };
});
