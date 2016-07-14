var app = angular.module("MultipleControllerModule", []);
app.controller("firstController", function firstController($scope) {
    $scope.firstName = "Surya Kumari";
    $scope.lastName = "Pendimi";
    $scope.getFullName = function () {
        return $scope.firstName + " " + $scope.lastName;
    };
});

    app.controller("secondController", function secondController($scope) {
        $scope.firstName = "Surya Kumari";
        $scope.middleName = "XYZ";
        $scope.lastName = "Pendimi";
        $scope.getFullName = function () {
            return $scope.firstName + " " + $scope.middleName + " " + $scope.lastName;
        };
    });

