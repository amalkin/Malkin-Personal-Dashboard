weUniC.controller('ChatsCtrl', ['$scope','$ionicScrollDelegate','$stateParams','Message', 'Mentors', function($scope, $ionicScrollDelegate, $stateParams, Message, Mentors){
      
      $scope.mentor = Mentors.get($stateParams.mentorId);
      $scope.userId="Guest1";
      var alternate;
      $scope.messages= Message.all;

      $scope.$watch("messages", function(){

window.setTimeout(function(){
  $(".chat-window").scrollTop(1000000000000);
}, 10);

      }, true)

      //window.alert("comming here"+Message.get());
      $scope.inserisci = function(message){

        alternate = !alternate;
        var userId = alternate ? 'Guest1' : 'Guest2';
        Message.create(message,userId);
        delete $scope.newmessage.text;
        $ionicScrollDelegate.scrollBottom(true);
      };
  $scope.myId = 'Guest1';

 /*var chatWindowHeight = $(".bar-footer").position().top - $(".chat-window").position().top - 80;
 $(".col.chat-window").attr('style', 'height:'+chatWindowHeight+'px !important; overflow-y: scroll'); */
  }]);