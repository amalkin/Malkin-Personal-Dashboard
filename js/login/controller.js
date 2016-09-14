weUniC.controller('LoginCtrl', function($scope, $rootScope, $state){

  $scope.emailFocus = false;
  $scope.passwordFocus = false;

  $scope.doLogin = function(valid){
    if(valid){

      $rootScope.user = {};
      $state.go("tab.home");
    }
  }

});
