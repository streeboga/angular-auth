'use strict';

/* App Module */
var userApp = angular.module('userApp', [
    'ngRoute',
    'userControllers'
]);

userApp.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/reg', {
                    templateUrl: 'partials/reg.html',
                    controller: 'UserListCtrl'}).
                when('/user/:userId', {
                    templateUrl: 'partials/detail.html',
                    controller: 'UserDetailCtrl'
                }).
                otherwise({
                    redirectTo: '/reg'
                });
        }]);

/* Controllers */
var userControllers = angular.module('userControllers', []);


userControllers.controller('UserListCtrl', function($scope,$http) {
   // UserListCtrl.$inject = ['$scope', '$http'];
    // python -m SimpleHTTPServer
    $scope.limit = 3;
    $http.get('users.json').success(function(data) {
       //data = d;
        $scope.users = data;
    });
    //$scope.users = data.splice(0, $scope.limit);
    $scope.orderProp = 'name';

    $scope.addItem = function () {

        $scope.users.push({
            userId: $scope.userId,
            name: $scope.yourName,
            email: $scope.email,
            password: $scope.password
        });

        // Clear input fields after push
        $scope.userId='';
        $scope.yourName='';
        $scope.email='';
        $scope.password='';

    };
});

userControllers.controller('UserDetailCtrl', function($scope,$routeParams,$http) {
    $scope.userId = $routeParams.userId;
    $http.get('user.json').success(function(data) {
        $scope.user = data;
        //alert(JSON.stringify(data));
    });
});
