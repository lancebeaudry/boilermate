app.directive('appFooter', function () {
    return {
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: 'assets/js/directives/footer.html'
	};
});