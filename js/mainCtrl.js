weUniC.controller('MainCtrl', function($scope, $rootScope, $state) {

  console.log("MainCtrl: \n");

  if ('serviceWorker' in navigator) {

    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });

  }

  $rootScope.user = null;

  $rootScope.$on('$stateChangeError', _onStateChangeErrorListener);

  $scope.$on("UPDATE_CHECKLIST", function(event, args){
    $scope.updateProgress(args.percent);
    $scope.$digest();
  });

  $scope.updateProgress = function(val){
    $scope.progress = val;
  };

  $scope._init = function(){
    $scope.progress = 17;
    $scope.checklist = {
      data: [
        {
          "name": "Register for we.Uni Campus Open Day",
          "selected": "selected"
        },
        {
          "name": "Fill in Your Profile",
          "selected": ""
        },
        {
          "name": "Book the Hotel/Campus accommodation",
          "selected": ""
        },
        {
          "name": "Choose Your Mentor",
          "selected": ""
        },
        {
          "name": "Choose Open Session",
          "selected": ""
        },
        {
          "name": "Don't Forget:",
          "selected" : "partial",
          "children": [
            {
              "name": "Parking Pass",
              "selected": "selected"
            },
            {
              "name": "Camera",
              "selected": ""
            },
            {
              "name": "Comfortable walking shoes",
              "selected": ""
            },
            {
              "name": "Sunscreen",
              "selected": ""
            },
            {
              "name": "Rain Gear",
              "selected": "selected"
            }
          ]
        }
      ]
    }
  };

  $scope._init();


  function _onStateChangeErrorListener(event, toState, toParams, fromState, fromParams, error) {
    if(error === "AUTH_REQUIRED"){
      event.preventDefault();
      $state.go("login");
    }
  }

});
