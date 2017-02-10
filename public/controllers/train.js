angular.module('SmashStats')
.controller('TrainCtrl', function($rootScope, $scope) {
	$rootScope.activePage = 'train';

});

'use strict';

$(document).ready(function(){
	initializePage();
})

function initializePage(){
	$("a#diff").click(function(e) {
		var diff = $(this).first().text();
		console.log(diff+"TEST");
		$("#subtext").first().text(diff+" difficulty selected!");
	})
}