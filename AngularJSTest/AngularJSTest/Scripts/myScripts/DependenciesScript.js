// Definition of a BaseProvider object to use
// in multiple instances across different modules.
var BaseProvider = function () {
    var providerID;

    return {
        setID: function (id) {
            providerID = id;
        },
        $get: function () {
            return {
                getProviderID: function () {
                    return providerID;
                }
            };
        }
    };
};
angular.module("childModule1", [])
  .provider("provider1", BaseProvider)
  .config(function (provider1Provider) {
      provider1Provider.setID("provider1-childModule1");
  })
  .provider("provider2", BaseProvider)
  .config(function (provider2Provider) {
      provider2Provider.setID("provider2-childModule1");
  });
// Definition of a BaseProvider object to use
// in multiple instances across different modules.
var BaseProvider = function () {
    var providerID;

    return {
        setID: function (id) {
            providerID = id;
        },
        $get: function () {
            return {
                getProviderID: function () {
                    return providerID;
                }
            };
        }
    };
};

angular.module("childModule1", [])
  .provider("provider1", BaseProvider)
  .config(function (provider1Provider) {
      provider1Provider.setID("provider1-childModule1");
  })
  .provider("provider2", BaseProvider)
  .config(function (provider2Provider) {
      provider2Provider.setID("provider2-childModule1");
  });

angular.module("childModule2", ["childModule3"])
  .provider("provider1", BaseProvider)
  .config(function (provider1Provider) {
      provider1Provider.setID("provider1-childModule2");
  })
  .provider("provider3", BaseProvider)
  .config(function (provider3Provider) {
      provider3Provider.setID("provider3-childModule2");
  });

angular.module("childModule3", [])
  .provider("provider1", BaseProvider)
  .config(function (provider1Provider) {
      provider1Provider.setID("provider1-childModule3");
  })
  .provider("provider4", BaseProvider)
  .config(function (provider4Provider) {
      provider4Provider.setID("provider4-childModule3");
  });
angular.module("mainModule", ["childModule1", "childModule2"])
  // I can get all the providers in the other modules through Dependency Injection
  // because there's only a flat (with no hierarchy) collection of provider names
  // in the whole AngularJS application and it doesn't depend on the modules hierarchy.
  .controller("mainController", function ($scope, provider1, provider2, provider3, provider4) {
      // Set variables on the scope to reference the different providers from the HTML template
      $scope.provider1 = provider1;
      $scope.provider2 = provider2;
      $scope.provider3 = provider3;
      $scope.provider4 = provider4;
  });