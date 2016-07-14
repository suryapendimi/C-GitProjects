var app= angular.module("OrderFormModule", [] );
app.controller("OrderFormController", function OrderFormController($scope) {
        $scope.services= [
        {
            name: 'Web Development',
            price: 300,
            active: true
        },
        {
            name: 'Media Development',
            price: 150.67,
            active: false
        },
        {
            name: 'Application Development',
            price: 455.90,
            active: false
        },
        {
            name: 'Mobile Development',
            price: 255.45,
            active: false
        },
        {
            name: 'Cloud Development',
            price: 655.87,
            active: false
        }
    ];
        $scope.toggleActive = function (s) {
            s.active = !s.active;

        };
    $scope.total = function () {
        var total = 0;
        angular.forEach($scope.services, function (s) {
            if (s.active)
            { total += s.price; }

        });
        return total;
    };

});