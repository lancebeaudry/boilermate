app.controller('MainController', ['$scope', function ($scope, $log) {
    $scope.navlist = {
        item1: 'Home',
        item2: 'Services',
        item3: 'Item 1',
        item4: 'Item 2',
        item5: 'About',
        item6: 'Contact',
        logo: ''
    };
    $scope.status = {
        isopen: false
    };
    $scope.footerList = {
        name: 'Business Name',
        item1: $scope.navlist.item1,
        item3: $scope.navlist.item3,
        item4: $scope.navlist.item4,
        item5: $scope.navlist.item5,
        item6: $scope.navlist.item6,
        phone: '555-555-5555',
        email: 'contact@website.com'
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