// Definition of a PersonManager object
var PersonManager = function () {
    return {
        $get: function (person) {
            return {
                getPersonFirstName: function () {
                    return person.firstName;
                },
                getPersonLastName: function () {
                    return person.lastName;
                },
                getPersonFullName: function (separator) {
                    return person.firstName + separator + person.lastName;
                }
            };
        }
    };
};
// Initialization of the "mainModule"
angular.module("RegisteringAProviderModule", [])
  // Register an object instance as a value and name it "person"
  .value("person", {
      firstName: "",
      lastName: ""})  
.provider("personManager", PersonManager)
.controller("RegisteringAProviderController", function ($scope, person, personManager) {
    person.firstName = "Surya Kumari";
    person.lastName = "Masabathula";

    $scope.personInstance = person;
    $scope.personManagerInstance = personManager;

});
