app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
	$routeProvider.when('/',{
		controller:'MainController',
		templateUrl:'page/beranda.html'
	}).when('/profil',{
		templateUrl:'page/profil.html'
	}).otherwise({
		redirectTo:'/'
	});

	$locationProvider.html5Mode(true);
}]);