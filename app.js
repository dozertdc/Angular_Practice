var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope) {
    
    $scope.name = {
        firstname: 'Travis',
        lastname: 'Cooper'
    };
    
}]);

myApp.controller('secondController', ['$scope', function($scope) {
    
    $scope.name = 'Second';
    
}]);
