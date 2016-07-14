/*
var app = angular.module("CheckBoxmodule", []);
app.controller("checkBoxSelectController", function checkBoxSelectController($scope) {
    $scope.Items = [{ Name: "Maths" }; { Name: "Physics" }, { Name: "Chemistry" }, { Name: "English" }, { Name: "Telugu" }, { Name: "Hindi" }];
    $scope.checkAll = function () {
        if ($scope.SelectedAll) { $scope.SelectedAll = true; }
        else { $scope.SelectedAll = false; }
    };
    angular.forEach($Scope.Items, function (item) {
        item.Selected = $scope.selectedAll;
    });

});
*/

angular.module("CheckAllModule", [])   
.controller("checkboxController", function checkboxController($scope) {   
    $scope.Items = [{   
        Name: "Gold"   
    }, {   
        Name: "Silver"   
    },   
    {   
        Name: "Bronze"   
    },   
    {   
        Name: "Gold Platinam"
    },   
    {   
        Name: "Gold & Silver"   
    },   
    {   
        Name: "Silver & Bronze"   
    }];   
    $scope.checkAll = function () {   
        if ($scope.selectedAll) {   
            $scope.selectedAll = true;   
        } else {   
            $scope.selectedAll = false;   
        }   
        angular.forEach($scope.Items, function (item) {   
            item.Selected = $scope.selectedAll;   
        });   
    };   
});   

  
