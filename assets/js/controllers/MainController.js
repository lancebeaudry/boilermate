app.controller('MainController', ['$scope', function($scope) {
    $scope.navlist = {
        item1: 'Home',
        item2: 'Dropdown',
        item3: 'Item',
        item4: 'Item2',
        item5: 'About'
    };
    $scope.footerList = {
        name: 'Business Name'
    };
}]);