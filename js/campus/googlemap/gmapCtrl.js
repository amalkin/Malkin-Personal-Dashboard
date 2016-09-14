weUniC.controller('GmapCtrl', function($scope, $state, $cordovaGeolocation, PreferencesService) {
  
  var options = {timeout: 10000, enableHighAccuracy: true};

  var preferences = PreferencesService.getPreferences();
  var latlong = preferences["latlong"];
  console.log(latlong);
  if(latlong == undefined)
  {
    latlong = '10,77';//Default value to load map
  }
  var coordinates = latlong.split(",");
  var lat  = coordinates[0];
  var long = coordinates[1];

  var unilat = lat;//pass University Coordinates from Config file/Preferences screen
  var unilong = long;//pass University Coordinates from Config file/Preferences screen

  var latLng = new google.maps.LatLng(unilat, unilong);
    var mapOptions = {
      center: latLng,
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    //Wait until the map is loaded
    google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
      var marker = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: latLng
      });   
   
      var infoWindow = new google.maps.InfoWindow({
        content: "<html><body><b>University App</ b></body></html>"
      });
   
      google.maps.event.addListener(marker, 'click', function () {
        infoWindow.open($scope.map, marker);
      });
    });
   $scope.opengmap = function() {
          if( (navigator.platform.indexOf("iPhone") != -1) 
            || (navigator.platform.indexOf("iPod") != -1)
            || (navigator.platform.indexOf("iPad") != -1))
              window.open('maps://maps.google.com/maps?z=8&t=m&ll='+lat+','+long+'sll='+lat+','+long, '_system');
            else
              window.open('http://maps.google.com/maps?z=8&t=m&ll='+lat+','+long +'sll='+lat+','+long,'_system');
          }    
});
