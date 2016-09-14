weUniC.factory('TwitterService', function($cordovaOauth, $cordovaOauthUtility, $http, $q, $localstorage) {
    var twitterKey = "TWITTERKEY";
    //var clientId = 'iItrVOJEQkRXVYNPKY4ctI699';
    //var clientSecret = 'HBaaCfTRdm4Ww9ODO4guU5qG3zcTeCCW4JDDcaSGadYUAf1vrp';

    function storeUserToken(access_token) {
      $localstorage.setObject(twitterKey, access_token);
    }

    function getStoredToken() {
      var object = $localstorage.getObject(twitterKey, null);
      return object;
    }

    function createTwitterSignature(method, clientId, clientsecretkey, url) {
        var token = $localstorage.getObject('TWITTERKEY');
        var oauthObject = {
            oauth_consumer_key: clientId,
            oauth_nonce: $cordovaOauthUtility.createNonce(10),
            oauth_signature_method: "HMAC-SHA1",
            oauth_token: token.oauth_token,
            oauth_timestamp: Math.round((new Date()).getTime() / 1000.0),
            oauth_version: "1.0"
        };
        var signatureObj = $cordovaOauthUtility.createSignature(method, url, oauthObject, {}, clientsecretkey, token.oauth_token_secret);
        $http.defaults.headers.common.Authorization = signatureObj.authorization_header;
    }

    function getTweet(url){
      var deferred = $q.defer();

      $http({
        method: 'GET',
        url: url
      }).then(function successCallback(response) {
          deferred.resolve(response);
      }, function errorCallback(error) {
          console.error(JSON.stringify(error));
          deferred.reject(error);
      });

      return deferred.promise;
    }

    return {
        registerOAuthToken: function(clientId,clientSecret) {
            console.log(clientId);
          console.log(clientSecret);
            var deferred = $q.defer();
            var token = getStoredToken();
            if (token.oauth_token != null) {
                deferred.resolve(token);
            } else {
                $cordovaOauth.twitter(clientId, clientSecret).then(function(result) {
                    storeUserToken(result);
                    deferred.resolve(result);
                }, function(error) {
                  //alert(JSON.stringify(error))
                    deferred.reject(error);
                });
            }
            return deferred.promise;
        },
        getTwitterTimeline: function(clientId, clientsecretkey) {
            var twitter_home_url = 'https://api.twitter.com/1.1/statuses/home_timeline.json';
            createTwitterSignature('GET', clientId, clientsecretkey, twitter_home_url);
            return  getTweet(twitter_home_url);
        },
        storeUserToken: storeUserToken,
        getStoredToken: getStoredToken,
        createTwitterSignature: createTwitterSignature
    };
});
