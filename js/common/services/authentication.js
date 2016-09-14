weUniC.factory("AuthenticationService", function ($rootScope, $timeout, $q) {
  var service = {};

  service.checkAuth = function () {
    var defer = $q.defer();

    $timeout(function(){
      if ($rootScope.user && $rootScope.user != null) {
        defer.resolve();
      }else{
        defer.reject("AUTH_REQUIRED")
      }
    }, 1000);

    return defer.promise;
  };

  return service;
});
