var app = angular.module("mainModule", [])
    .value("person", {
    firstName: "",
    lastName: "",

    getFullName: function ()
    {
        return this.firstName + " " + this.lastName;
    }
})
.controller("mainController", function mainController($scope,person) {
    person.firstName= "Surya";
    person.lastName= "Masabathula";
    $scope.personInstance=person;

});