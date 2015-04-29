app.controller('MainController', ['$scope', function ($scope, $log) {
    $scope.navlist = {
        item1: 'Home',
        item2: 'Dropdown',
        item3: 'Item',
        item4: 'Item2',
        item5: 'About'
    };
    $scope.status = {
        isopen: false
    };
    $scope.footerList = {
        name: 'TRT Furniture'
    };
    $scope.toggled = function (open) {
        $log.log('Dropdown is now: ', open);
    };
    $scope.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };
    $scope.navbarCollapsed = true;
}]);