weUniC.controller('ConnectCtrl', ["$scope", "$localstorage", "$http", "InstagramService", "PreferencesService", "TwitterService", function ($scope, $localstorage, $http, InstagramService, PreferencesService, TwitterService) {
  console.log("Starting ConnectCtrl...");

  $scope.filteredInstaJSON = {valid: false};
  $scope.home_timeline = {valid: false};

  function populateUserInfo(instaUserInfo) {
    console.log("UserInfo: \n");
    console.log(JSON.stringify(instaUserInfo));

    var username = instaUserInfo.data.data.username;
    var profilePic = getValue(instaUserInfo.data.data, "profile_picture", "");

    console.log("username: " + username);
    console.log("profilePic: " + profilePic);

    $scope.filteredInstaJSON.username = username;
    $scope.filteredInstaJSON.profilePic = profilePic;

    //$scope.filteredInstaJSON = ;
  }

  function populateRecentMediaInfo(instaRecentMediaInfo) {
    console.log("RecentMediaInfo: \n");
    console.log(JSON.stringify(instaRecentMediaInfo));

    var likes = getRecentMediaValue(instaRecentMediaInfo, "likes");
    var likesCount = getValue(likes, "count", 0);

    var comments = getRecentMediaValue(instaRecentMediaInfo, "comments");
    var commentsCount = getValue(comments, "count", 0);
    var showCaption = (commentsCount > 0) ? true : false;

    var images = getRecentMediaValue(instaRecentMediaInfo, "images");
    var low_resolution = getValue(images, "low_resolution", "");
    var imageUrl = getValue(low_resolution, "url", "");
    var showFeed = (imageUrl == "") ? false : true;

    var caption = getRecentMediaValue(instaRecentMediaInfo, "caption");
    var commentText = getValue(caption, "text", "");

    console.log("likes: " + likesCount);
    console.log("comments: " + commentsCount);
    console.log("low_resolution: " + imageUrl);
    console.log("commentText: " + commentText);

    $scope.filteredInstaJSON.likesCount = likesCount;
    $scope.filteredInstaJSON.commentsCount = commentsCount;
    $scope.filteredInstaJSON.imageUrl = imageUrl;
    $scope.filteredInstaJSON.showCaption = showCaption;
    $scope.filteredInstaJSON.commentText = commentText;
    $scope.filteredInstaJSON.showFeed = showFeed;

    //$scope.filteredInstaJSON =
  }

  function getValue(source, key, defaultValue) {
    var value = (source == "" || source == undefined || source == null) ? defaultValue : source[key];
    value = (value == "" || value == undefined || value == null) ? defaultValue : value;

    return value;
  }

  function getRecentMediaValue(instaRecentMediaInfo, key) {
    var dataFeed = instaRecentMediaInfo.data.data;
    var value = (dataFeed.length == 0) ? "" : dataFeed[0][key];

    return value;
  }


  //Instagram

  function instagramFeed() {
    var preferences = PreferencesService.getPreferences();
    var instagramClientId = preferences["instagram"];
    var valid = validate(instagramClientId);
    console.log(instagramClientId);
    if (!valid) {
      console.error("Invalid Instagram config.");
      return;
    }

    var insta_access_token = $localstorage.getObject('insta_access_token');
    if (!insta_access_token.access_token ) {
      console.error("Invalid Instagram token.");
      return;
    }

    InstagramService.getRecentFeed(instagramClientId).then(
      function (result) {
        // result[0] = UserInfo and result[1] = feedInfo
        populateUserInfo(result[0]);
        populateRecentMediaInfo(result[1]);

        $scope.filteredInstaJSON.valid = true;
      },
      function (error) {
        // handle errors here
        //console.error("test");
        console.error(error);
      }
    );
  }

  instagramFeed();

  function validate(config, socialText) {
    var valid = false;
    if (config && config != null && config != "") {
      valid = true;
    }

    return valid;
  }

  //Twitter Service
  function logintwitter() {
    var preferences = PreferencesService.getPreferences();
    var clientId = preferences["twitterClientId"];
    var clientsecretkey = preferences["twitterClientSecret"];

    var valid = validate(clientId);
    valid = valid && validate(clientsecretkey);

    if (!valid) {
      alert("Invalid Twitter configs!!!");
      return;
    }

    var twitter_access_token = $localstorage.getObject('TWITTERKEY');
    if (!twitter_access_token.oauth_token) {
      console.error("Invalid Twitter token.");
      return;
    }

    TwitterService.getTwitterTimeline(clientId, clientsecretkey).then(
      function (result) {
        console.log(JSON.stringify(result));
        $scope.home_timeline = result;
        $scope.home_timeline.valid = true;
      },
      function (error) {
        console.error(error);
      }
    );
  }

  logintwitter();

  console.log("Done ConnectCtrl.");
}]);
