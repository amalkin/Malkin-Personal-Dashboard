weUniC.controller('MentorCtrl', ['$scope','$location', '$ionicPopup','$stateParams' ,'Mentors', function($scope, $location, $ionicPopup, $stateParams, Mentors){
 
 Mentors.all(function(data){
  $scope.mentors = data;
 });

 $scope.go = function ( path ) {
    $location.path( path );
  };
  
$scope.showConfirm = function(path) {
  var mentorId = path.split('/')[3];
  var mentorName = Mentors.get(mentorId);
  var confirmPopup = $ionicPopup.confirm({
    
     title: 'Do you want to choose <br>'+mentorName.name+' as your Mentor ?' ,
     template: '<img style=" margin-left: 64px; max-width: 100px; max-height: 100px; width: 100%; height: 100%; border-radius: 50%; border: 3px solid #a2a2a2;" src ='+mentorName.avatar+'><div style="text-align: center;">'+mentorName.name+'</div>'
   });

   confirmPopup.then(function(res) {
     if(res) {
       $location.path( path );
     } else {
       console.log('You are not sure');
     }
   });
 };
}]);

