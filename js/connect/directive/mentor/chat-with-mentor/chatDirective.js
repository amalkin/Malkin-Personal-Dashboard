weUniC.directive('input', function($timeout) {
  return {
    restrict: 'E',
    scope: {
      'returnClose': '=',
      'onReturn': '&'
    },
    link: function(scope, element, attr) {
      element.bind('keydown', function(e) {
        if (e.which == 13) {
          if (scope.returnClose) element[0].blur();
          if (scope.onReturn) {
            $timeout(function() {
              scope.onReturn();
            });
          }
        }
      });
    }
  }
});

weUniC.factory('Message', ['$firebaseArray', 'PreferencesService',
  function($firebaseArray, PreferencesService) {
     var preferences = PreferencesService.getPreferences();
    var firebaseUrl = preferences["firebase"];
    console.log(firebaseUrl);

    var ref = new Firebase(firebaseUrl);
    
    var messages = $firebaseArray(ref);
    var Message = {
      all: messages,
      create: function (message,userId) {
        return messages.$add({message:message, userId:userId});

      }
    };
 
    return Message;
 
  }
])
