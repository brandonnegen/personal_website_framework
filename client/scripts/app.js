var myApp = angular.module('myApp', ["ngRoute", 'appControllers']);

var appControllers = angular.module('appControllers', []);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
        when('/home', {
         templateUrl: "/assets/views/routes/home.html",
            controller: "HomeController"
        }).
        when('/aboutme', {
            templateUrl: "/assets/views/routes/aboutme.html",
            controller: "AboutMeController"
        }).
        when('/projects', {
            templateUrl: "/assets/views/routes/projects.html",
            controller: 'ProjectsController'
        }).
        otherwise({
            redirectTo: "/home"
        })
}]);