weUniC.controller('ProfileCtrl', function ($scope, $rootScope, $ionicActionSheet, Camera) {


  $scope.progress = 60;
  $scope.profilePic = "";

  $scope.showActionsheet = function () {
    $ionicActionSheet.show({
      titleText: 'Choose a medium',
      buttons: [
        {text: '<i class="icon ion-ios-camera"></i> Camera'},
        {text: '<i class="icon ion-images"></i> Gallery'}
      ],
      cancelText: 'Cancel',
      cancel: function () {
        console.log('CANCELLED');
      },
      buttonClicked: function (index) {

        var options = {
          quality: 100,
          targetWidth: 800,
          targetHeight: 800
        };

        options.sourceType = index == 0 ? 1 : 0;
        getPicture(options);
        return true;
      }
    });
  }

  function getPicture(options) {

    Camera.getPicture(options).then(function (imageData) {
      $scope.profilePic = imageData;
    }, function (err) {
      console.log(err);
    });
  }

});
