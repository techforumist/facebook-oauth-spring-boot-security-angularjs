// Creating angular Application with module name "FacebookOAuthDemoApp"
var app = angular.module('FacebookOAuthDemoApp', []);

app.config([ '$httpProvider', function($httpProvider) {
	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
} ]);

// Creating the Angular Controller
app.controller('AppCtrl', function($http, $scope) {

	// method for getting user details
	var getUser = function() {
		$http.get('/user').success(function(user) {
			$scope.user = user;
			console.log('Logged User : ', user);
		}).error(function(error) {
			$scope.resource = error;
		});
	};
	getUser();

	// method for logout
	$scope.logout = function() {
		$http.post('/logout').success(function(res) {
			$scope.user = null;
		}).error(function(error) {
			console.log("Logout error : ", error);
		});
	};
});
