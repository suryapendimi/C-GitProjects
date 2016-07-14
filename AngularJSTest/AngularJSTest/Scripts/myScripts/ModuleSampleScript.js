var app = angular.module("mainModule", []);
app.controller("simpleController", function simpleController($scope) {
    $scope.person = {
        firstName: "Surya",
        lastName: "Masabathula"        
    };

    $scope.person.getFullName= function () {
        return $scope.person.firstName + " " + $scope.person.lastName;

    };

});