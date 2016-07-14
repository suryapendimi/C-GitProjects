var app = angular.module("ControllerSamplemodule", []);
app.controller("ControllerSample", function ControllerSampleController($scope) {
    $scope.firstName = "Surya Kumari";
    $scope.lastName = "Pendimi";
    $scope.getFullName = function () {
        return $scope.firstName + " " + $scope.lastName;
    };

});