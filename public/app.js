angular.module("quoteApp", [])
.controller("quoteController", function ($scope, $http) {
	$http.get("/api/random-quote").then(function(response) {
		$scope.quote = response.data;
	})
});
