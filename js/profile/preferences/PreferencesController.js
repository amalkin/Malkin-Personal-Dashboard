weUniC.run(function (formlyConfig) {
  formlyConfig.setType([{
    name: 'instagram',
    templateUrl: "instagram.html",
    controller: function ($scope, $rootScope) {
      $scope.btnClick = function () {
        $rootScope.instagramConnect();
      }
    }
  }, {
    name: 'twitter',
    templateUrl: "twitter.html",
    controller: function ($scope, $rootScope) {
      $scope.btnClick = function () {
        $rootScope.loginTwitter();
      }
    }
  },
    {
      name: 'customField',
      templateUrl: "customField.html",
      controller: function ($scope, $rootScope) {
        $scope.btnClick = function () {
          //alert("dd");
          //$rootScope.twitterConnect();
        }
      }
    }]);
});

weUniC.controller('PreferencesCtrl', function ($scope, $rootScope, PreferencesService, InstagramService, TwitterService, $localstorage) {
  console.log("Starting PreferencesCtrl");

  $scope.preferences = {};

  // The model object that we reference
  // Default values
  $scope.preferences.model = PreferencesService.getPreferences();

  PreferencesService.setPreferences($scope.preferences.model);

  console.log(JSON.stringify(PreferencesService.getPreferences()));

  $scope.preferences.options = {};

  $scope.preferences.fields = [
    {
      "className": "section-label",
      "template": "<hr /><div><strong class='padding'>SOCIAL MEDIA LINKS</strong></div><hr />"
    },
    {
      key: 'instagram',
      type: 'instagram',
      templateOptions: {
        placeholder: 'Client Id',
        label: "Instagram"
      }
    },
    {
      key: 'twitter',
      type: 'twitter',
      templateOptions: {
        twitterClientId: "twitterClientId",
        twitterClientSecret: "twitterClientSecret",
        placeholderClientId: 'Client Id',
        labelClientId: "Twitter Client Id",
        placeholderClientSecret: 'Client Secret',
        labelClientSecret: 'Twitter Client Secret',
      }
    },
    {
      "className": "section-label",
      "template": "<hr /><div><strong class='padding'>MENTOR CONTACT DETAILS</strong></div><hr />"
    },
    {
      key: 'email',
      type: 'customField',
      templateOptions: {
        placeholder: 'Email',
        label: "Email"
      }
    },
    {
      key: 'phonenumber',
      type: 'customField',
      templateOptions: {
        placeholder: 'Phone Number',
        label: "Phone Number"
      }
    },
    {
      key: 'firebase',
      type: 'textarea',
      templateOptions: {
        placeholder: 'Firebase',
        "rows": 2
      }
    },
    {
      "className": "section-label",
      "template": "<hr /><div><strong class='padding'>CAMPUS COORDINATES</strong></div><hr />"
    },
    {

      key: 'latlong',
      type: 'textarea',
      templateOptions: {
        placeholder: 'Latitude/Longitude (Format:lat,long)',
        "rows": 3
      }
    }
  ];

  $scope.preferences.originalFields = angular.copy($scope.preferences.fields);

  $scope.resetForm = function () {
    $scope.preferences.options.resetModel();
    //console.log(JSON.stringify($scope.preferences.model));
    //console.log(JSON.stringify(PreferencesService.getPreferences()));
  }

  $rootScope.instagramConnect = function () {
    var preferences = PreferencesService.getPreferences();
    var instagramClientId = preferences["instagram"];
    console.log(instagramClientId);
    if (instagramClientId && instagramClientId != null && instagramClientId != "") {
      InstagramService.login(instagramClientId).then(
        function (result) {
          alert("Instagram - logged in successfully.");
        },
        function (error) {
          // handle errors here
          console.error(error);
        }
      );
    } else {
      alert("Client id is empty!!!");
    }
  }


  function validate(config) {
    var valid = false;
    if (config && config != null && config != "") {
      valid = true;
    }

    return valid;
  }

  $rootScope.loginTwitter = function () {
    var preferences = PreferencesService.getPreferences();
    var clientId = preferences["twitterClientId"];
    var clientsecretkey = preferences["twitterClientSecret"];

    var valid = validate(clientId);
    valid = valid && validate(clientsecretkey);

    if (!valid) {
      alert("Invalid Twitter configs!!!");
      return;
    }
    TwitterService.registerOAuthToken(clientId, clientsecretkey).then(function (result) {
        console.log("Twitter toekn: " + JSON.stringify(result));
        alert("Twitter - logged in successfully.");
      },
      function (error) {
        // handle errors here
        console.error(JSON.stringify(error));
      });
  }

  console.log("Done PreferencesCtrl!!!");
});




