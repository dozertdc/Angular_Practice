var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope) {
    
    $scope.name = 'Main';
    $scope.object = {
        id: 1
    };
    
}]);

myApp.controller('secondController', ['$scope', function($scope) {
    
    $scope.name = 'Second';
    
}]);
