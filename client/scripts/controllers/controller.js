myApp.controller('HomeController', ['$scope', function($scope){
    console.log("Home Controller");
}]);

myApp.controller('AboutMeController', ['$scope', function($scope){
    console.log("About Me Controller");
}]);

myApp.controller('ProjectsController', ['$scope', '$http', function($scope, $http){
    console.log("Projects Controller");
    $http.get("https://api.github.com/users/brandonnegen/repos")
        .success(function (data) {
            $scope.repos = data;
            $scope.reposFound = data.length > 0;
        });
}]);