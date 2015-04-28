app.directive('appHeader', function () {
    return {
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: 'assets/js/directives/header.html'
	};
});