var app = angular.module("NestedControllerModule", []);
app.controller("firstControllerScope", function firstControllerScope ($scope) {
    // Initialize the model variables
    $scope.firstName = "Surya";
});

app.controller("secondControllerScope", function secondControllerScope($scope) {
    // Initialize the model variables
    $scope.lastName = "Masabathula";

    // Define utility functions
    $scope.getFullName = function () {
        return $scope.firstName + " " + $scope.lastName;
    };
});
app.controller("thirdControllerScope", function thirdControllerScope($scope) {
    // Initialize the model variables
    $scope.middleName = "XYZ";
    $scope.lastName = "Gold";

    // Define utility functions
    $scope.getFullName = function () {
        return $scope.firstName + " " + $scope.middleName + " " + $scope.lastName;
    };
});

app.controller("firstControllerObj", function firstControllerObj($scope) {
    // Initialize the model object
    $scope.firstModelObj = function () {
        firstName: "Surya";
    };
});

app.controller("secondControllerObj", function secondControllerObj($scope) {
    // Initialize the model object
    $scope.secondModelObj = function () {
        lastName: "Masabathula";
    };

    // Define utility functions
    $scope.getFullName = function () {
        return $scope.firstModelObj.firstName + " " +
          $scope.secondModelObj.lastName;
    };
});

app.controller("thirdControllerObj", function thirdControllerObj($scope) {
    // Initialize the model object
    $scope.thirdModelObj = function () {
        middleName: "XYZ";
        lastName: "Pendimi";
    };

    // Define utility functions
    $scope.getFullName = function () {
        return $scope.firstModelObj.firstName + " " +
          $scope.thirdModelObj.middleName + " " +
          $scope.thirdModelObj.lastName;
    };
});
