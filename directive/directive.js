app.directive('navigasi',function() {
	return {
		restrict:'E',
		templateUrl:'page/navbar.html'
	};
});

app.directive('slide',['$window',function($window) {
	return{
		restrict:'A'
	};
}]);

app.directive('containerSlide',['$window',function($window) {
	return{
		restrict:'A',
		link: function(scope, elm, attr) {
			scope.indiku=scope.$eval(attr.indi);
			// $window.alert();
		}
	};
}]);