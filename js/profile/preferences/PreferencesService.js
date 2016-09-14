angular.module('ngInstagramIonic', [])

.factory('InstagramService', function($localstorage, $http, $q, $cordovaOauth) {

  function getInstaAccessToken(instagramClientId, deferred) {
    if (instagramClientId == "") {
      deferred.reject("Empty Client Id.");
      return deferred.promise;
    }

    $cordovaOauth.instagram(instagramClientId, ["scope=basic"]).then(function (access_token) {

      _setStorageToken(access_token);
      deferred.resolve(access_token);

      //var instaFeed = getInstaFeed(tokenObj);
      return deferred.promise;
    }, function (error) {
      deferred.reject(error);
      return deferred.promise;
    });
  }

  function _setStorageToken(access_token) {
    $localstorage.setObject('insta_access_token', access_token);
  }

  function _getStorageToken() {
    var object = $localstorage.getObject('insta_access_token', null);
    return object;
  }

  function _getAccessToken(instagramClientId) {
    var deferred = $q.defer();

    var access_token = _getStorageToken();
    if (!access_token.access_token) {
      getInstaAccessToken(instagramClientId, deferred);
    } else {
      deferred.resolve(access_token);
    }

    return deferred.promise;
  }

  function getInstaJSON(access_token) {

    var urlUserInfo = "https://api.instagram.com/v1/users/self/?access_token=" + access_token.access_token;
    var urlFeedInfo = "https://api.instagram.com/v1/users/self/media/recent/?count=1&access_token=" + access_token.access_token;
    var urls = [urlUserInfo, urlFeedInfo];

    var deferred = $q.defer();
    var urlCalls = [];
    angular.forEach(urls, function (url) {
      urlCalls.push($http.get(url));
    });

    $q.all(urlCalls)
      .then(
        function (results) {
          deferred.resolve(results);
        },
        function (errors) {
          deferred.reject(errors);
          $localstorage.setObject('insta_access_token', {});
        });

    return deferred.promise;
  }

  function _recentFeed(instagramClientId) {

    //setClientId(instagramClientId);

    var deferred = $q.defer();

    try {
      console.log('[InstagramService._recentFeed] Starting...');

      _getAccessToken(instagramClientId).then(
        function (access_token) {
          console.log("Access Token: " + access_token.access_token);
          getInstaJSON(access_token).then(
            function (results) {
              deferred.resolve(results);
            },
            function (errors) {
              deferred.reject(errors);
            });
        },
        function (errors) {
          deferred.reject(errors);
        }
      );

      console.log('[InstagramService._recentFeed] done.');

      //return feed;
    } catch (err) {
      console.error('[InstagramService._recentFeed] There was an error on this page ' + err.message);
      deferred.reject(err);
    }

    return deferred.promise;
  }

  function _login(instagramClientId) {
    var deferred = $q.defer();

    try {
      console.log('[InstagramService._login] Starting...');

      _getAccessToken(instagramClientId).then(
        function (access_token) {
          console.log("Access Token: " + access_token.access_token);
          deferred.resolve(access_token);
        },
        function (errors) {
          deferred.reject(errors);
        }
      );

      console.log('[InstagramService._login] done.');

      //return feed;
    } catch (err) {
      console.error('[InstagramService._login] There was an error on this page ' + err.message);
      deferred.reject(err);
    }

    return deferred.promise;
  }

  return {
    getRecentFeed: function (instagramClientId) {
      return _recentFeed(instagramClientId);
    },
    login: function(instagramClientId) {
      return _login(instagramClientId);
    }
  };
})

weUniC.factory('PreferencesService', function() {

    var preferences = {
      email: "kate.johnson@weedu.com",
      instagram: "7f8d70bbcdf64374a0449931a5edc165",
      phonenumber: "1-555-555-5555",
      firebase: "https://we-uni.firebaseio.com/messages",
      twitterClientId : "mp7cVxbM5LQY4jFVTUTNCcl8s",
      twitterClientSecret: "zFdf89fEQRDlFpWf1MScAmzs7w2s1nib38snOKpeddKBc6xaTQ"
    };

    function _getPreferences() {
      return preferences;
    }

    function _setPreferences(newModel) {
      preferences = newModel;
    }

    return {
         getPreferences: function() {
             return _getPreferences();
         },

        setPreferences: function(newModel){
            _setPreferences(newModel);
        }
    };
});
