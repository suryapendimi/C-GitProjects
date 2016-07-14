var app = angular.module("studentapp", []);
var cntr = app.controller("studentInputCntrl", function ($scope, $http) { 
    $scope.OriginalStudent = {
        firstName: 'James',
        lastName: 'Bond',
        DOB: new Date('01/31/1980'),
        gender: 'Male',
        trainingType: 'Online',
        AspNET: false,
        JAVA: true,
        AngularJS: true
    };
    $scope.student = angular.copy($scope.OriginalStudent);
    $scope.submitStudnetForm = function () {

        var onSuccess = function (data, status, headers, config) {
            alert('Student saved successfully.');
        };

        var onError = function (data, status, headers, config) {
            alert('Error occured.');
        }

        $http.post('/student/submitData', { student: $scope.student })
            .success(onSuccess)
            .error(onError);

    };

    //6. create resetForm() function. This will be called on Reset button click.  
    $scope.resetForm = function () {
        $scope.student = angular.copy($scope.OriginalStudent);
    };
});
