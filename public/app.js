<<<<<<< HEAD
var app = angular.module('galPhoto',['ngRoute', 'ngResource','ngCookies']);
=======
var app = angular.module('galPhoto',['ngRoute', 'ngResource']);
>>>>>>> origin/master

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/gallery', {
			templateUrl: 'views/gallery.view.html',
			controller: 'GalleryCtrl'
		})
		.otherwise({redirectTo: '/gallery'});
}]);