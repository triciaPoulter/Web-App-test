var SearchApp = angular.module("SearchApp", [])

SearchApp.controller("SearchController", function ($scope, LoadJson) {

    getJSON();
    function getJSON() {
        LoadJson.getJSON()
            .success(function (jdata) {
                $scope.webData = jdata;
                console.log($scope.webData);
            })
            .error(function (error) {
                $scope.status = 'Unable to load data: ' + error.message;
                console.log($scope.status);
            });
    }
});

SearchApp.factory('LoadJson', ['$http', function ($http) {

    var LoadJson = {};
    LoadJson.getJSON = function () {
        return $http.get("/jsonData/rob.json");
    };
    return LoadJson;

}]);