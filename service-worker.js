// Copyright 2016 Google Inc.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var dataCacheName = 'weEdu-v1';
var cacheName = 'weEdu-final-1';
var filesToCache = [
  '',
  '/Malkin-Personal-Dashboard/js/app.js',
'js/campus/googlemap',
'js/campus/googlemap/gmapCtrl.js',
'js/campus/tab-campus.html',
'js/common/directive/checklist/checklist.js',
'js/common/directive/checklist/template.html',
'js/common/directive/progress-bar/progressBar.js',
'js/common/directive/progress-bar/template.html',
'js/common/services/authentication.js',
'js/common/services/camera.js',
'js/common/utils/ionic-utils.js',
'js/config.js',
'js/connect/ConnectController.js',
'js/connect/directive/firebase-chat/firebaseChat.js',
'js/connect/directive/firebase-chat/template.html',
'js/connect/directive/instagram-feed/instagramFeed.js',
'js/connect/directive/instagram-feed/template.html',
'js/connect/directive/mentor/chat-room/chatRoomControllers.js',
'js/connect/directive/mentor/chat-room/chatRoomServices.js',
'js/connect/directive/mentor/chat-room/mentor.html',
'js/connect/directive/mentor/chat-with-mentor/chat-with-mentor.html',
'js/connect/directive/mentor/chat-with-mentor/chatControllers.js',
'js/connect/directive/mentor/chat-with-mentor/chatDirective.js',
'js/connect/directive/mentor/choose.html',
'js/connect/directive/twitter-feed/template.html',
'js/connect/directive/twitter-feed/twitterFeed.js',
'js/connect/instagram/ionic-instagram-service.js',
'js/connect/tab-connect.html',
'js/connect/twitter/ionic-twitter-service.js',
'js/home/tab-home.html',
'js/login/controller.js',
'js/login/login.html',
'js/mainCtrl.js',
'js/openDay/tab-open-day.html',
'js/profile/controller.js',
'js/profile/preferences/preferences.html',
'js/profile/preferences/PreferencesController.js',
'js/profile/preferences/PreferencesService.js',
'js/profile/tab-profile.html',
'js/states.js',
'js/tabs/tabs.html',
'js/travel-checklist/travel-checklist.html',
'json-data/mentors.json',
'lib/angular-formly/dist/formly.js',
'lib/angular-formly/dist/formly.min.js',
'lib/angular-formly/dist/formly.min.js.map',
'lib/angular-formly-templates-bootstrap/dist/angular-formly-templates-bootstrap.js',
'lib/angular-formly-templates-bootstrap/dist/angular-formly-templates-bootstrap.min.js',
'lib/angular-formly-templates-bootstrap/dist/angular-formly-templates-bootstrap.min.js.map',
'lib/angular-resource/angular-resource.js',
'lib/angular-resource/angular-resource.min.js',
'lib/angular-resource/angular-resource.min.js.map',
'lib/angular-resource/index.js',
'lib/api-check/dist/api-check.js',
'lib/api-check/dist/api-check.min.js',
'lib/api-check/dist/api-check.min.js.map',
'lib/bootstrap/dist/css/bootstrap-theme.css',
'lib/bootstrap/dist/css/bootstrap-theme.css.map',
'lib/bootstrap/dist/css/bootstrap-theme.min.css',
'lib/bootstrap/dist/css/bootstrap-theme.min.css.map',
'lib/bootstrap/dist/css/bootstrap.css',
'lib/bootstrap/dist/css/bootstrap.css.map',
'lib/bootstrap/dist/css/bootstrap.min.css',
'lib/bootstrap/dist/css/bootstrap.min.css.map',
'lib/bootstrap/dist/fonts/glyphicons-halflings-regular.eot',
'lib/bootstrap/dist/fonts/glyphicons-halflings-regular.svg',
'lib/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',
'lib/bootstrap/dist/fonts/glyphicons-halflings-regular.woff',
'lib/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2',
'lib/bootstrap/dist/js/bootstrap.js',
'lib/bootstrap/dist/js/bootstrap.min.js',
'lib/bootstrap/dist/js/npm.js',
'lib/fonts/font-awesome/font-awesome.min.css',
'lib/fonts/fonts/fontawesome-webfont.eot',
'lib/fonts/fonts/fontawesome-webfont.svg',
'lib/fonts/fonts/fontawesome-webfont.ttf',
'lib/fonts/fonts/fontawesome-webfont.woff',
'lib/fonts/fonts/fontawesome-webfont.woff2',
'lib/fonts/fonts/FontAwesome.otf',
'lib/ionic/css/ionic.css',
'lib/ionic/css/ionic.min.css',
'lib/ionic/fonts/ionicons.eot',
'lib/ionic/fonts/ionicons.svg',
'lib/ionic/fonts/ionicons.ttf',
'lib/ionic/fonts/ionicons.woff',
'lib/ionic/js/angular/angular-animate.js',
'lib/ionic/js/angular/angular-animate.min.js',
'lib/ionic/js/angular/angular-resource.js',
'lib/ionic/js/angular/angular-resource.min.js',
'lib/ionic/js/angular/angular-sanitize.js',
'lib/ionic/js/angular/angular-sanitize.min.js',
'lib/ionic/js/angular/angular.js',
'lib/ionic/js/angular/angular.min.js',
'lib/ionic/js/angular-ui/angular-ui-router.js',
'lib/ionic/js/angular-ui/angular-ui-router.min.js',
'lib/ionic/js/ionic-angular.js',
'lib/ionic/js/ionic-angular.min.js',
'lib/ionic/js/ionic.bundle.js',
'lib/ionic/js/ionic.bundle.min.js',
'lib/ionic/js/ionic.js',
'lib/ionic/js/ionic.min.js',
'lib/ionic/scss/_action-sheet.scss',
'lib/ionic/scss/_animations.scss',
'lib/ionic/scss/_backdrop.scss',
'lib/ionic/scss/_badge.scss',
'lib/ionic/scss/_bar.scss',
'lib/ionic/scss/_button-bar.scss',
'lib/ionic/scss/_button.scss',
'lib/ionic/scss/_checkbox.scss',
'lib/ionic/scss/_form.scss',
'lib/ionic/scss/_grid.scss',
'lib/ionic/scss/_items.scss',
'lib/ionic/scss/_list.scss',
'lib/ionic/scss/_loading.scss',
'lib/ionic/scss/_menu.scss',
'lib/ionic/scss/_mixins.scss',
'lib/ionic/scss/_modal.scss',
'lib/ionic/scss/_platform.scss',
'lib/ionic/scss/_popover.scss',
'lib/ionic/scss/_popup.scss',
'lib/ionic/scss/_progress.scss',
'lib/ionic/scss/_radio.scss',
'lib/ionic/scss/_range.scss',
'lib/ionic/scss/_refresher.scss',
'lib/ionic/scss/_reset.scss',
'lib/ionic/scss/_scaffolding.scss',
'lib/ionic/scss/_select.scss',
'lib/ionic/scss/_slide-box.scss',
'lib/ionic/scss/_slides.scss',
'lib/ionic/scss/_spinner.scss',
'lib/ionic/scss/_tabs.scss',
'lib/ionic/scss/_toggle.scss',
'lib/ionic/scss/_transitions.scss',
'lib/ionic/scss/_type.scss',
'lib/ionic/scss/_util.scss',
'lib/ionic/scss/_variables.scss',
'lib/ionic/scss/ionic.scss',
'lib/ionic/scss/ionicons/_ionicons-font.scss',
'lib/ionic/scss/ionicons/_ionicons-icons.scss',
'lib/ionic/scss/ionicons/_ionicons-variables.scss',
'lib/ionic/scss/ionicons/ionicons.scss',
'lib/ionic/version.json',
'lib/jquery/.bower.json',
'lib/jquery/AUTHORS.txt',
'lib/jquery/bower.json',
'lib/jquery/dist/jquery.js',
'lib/jquery/dist/jquery.min.js',
'lib/jquery/dist/jquery.min.map',
'lib/jquery/dist/jquery.slim.js',
'lib/jquery/dist/jquery.slim.min.js',
'lib/jquery/dist/jquery.slim.min.map',
'lib/jquery/LICENSE.txt',
'lib/jquery/sizzle/dist/sizzle.js',
'lib/jquery/sizzle/dist/sizzle.min.js',
'lib/jquery/sizzle/dist/sizzle.min.map',
'lib/jquery/sizzle/LICENSE.txt',
'lib/jquery/src/.jshintrc',
'lib/jquery/src/ajax/jsonp.js',
'lib/jquery/src/ajax/load.js',
'lib/jquery/src/ajax/parseJSON.js',
'lib/jquery/src/ajax/parseXML.js',
'lib/jquery/src/ajax/script.js',
'lib/jquery/src/ajax/var/location.js',
'lib/jquery/src/ajax/var/nonce.js',
'lib/jquery/src/ajax/var/rquery.js',
'lib/jquery/src/ajax/xhr.js',
'lib/jquery/src/ajax.js',
'lib/jquery/src/attributes/attr.js',
'lib/jquery/src/attributes/classes.js',
'lib/jquery/src/attributes/prop.js',
'lib/jquery/src/attributes/support.js',
'lib/jquery/src/attributes/val.js',
'lib/jquery/src/attributes.js',
'lib/jquery/src/callbacks.js',
'lib/jquery/src/core/access.js',
'lib/jquery/src/core/DOMEval.js',
'lib/jquery/src/core/init.js',
'lib/jquery/src/core/parseHTML.js',
'lib/jquery/src/core/ready.js',
'lib/jquery/src/core/support.js',
'lib/jquery/src/core/var/rsingleTag.js',
'lib/jquery/src/core.js',
'lib/jquery/src/css/addGetHookIf.js',
'lib/jquery/src/css/adjustCSS.js',
'lib/jquery/src/css/curCSS.js',
'lib/jquery/src/css/defaultDisplay.js',
'lib/jquery/src/css/hiddenVisibleSelectors.js',
'lib/jquery/src/css/showHide.js',
'lib/jquery/src/css/support.js',
'lib/jquery/src/css/var/cssExpand.js',
'lib/jquery/src/css/var/getStyles.js',
'lib/jquery/src/css/var/isHidden.js',
'lib/jquery/src/css/var/rmargin.js',
'lib/jquery/src/css/var/rnumnonpx.js',
'lib/jquery/src/css/var/swap.js',
'lib/jquery/src/css.js',
'lib/jquery/src/data/accepts.js',
'lib/jquery/src/data/Data.js',
'lib/jquery/src/data/support.js',
'lib/jquery/src/data/var/acceptData.js',
'lib/jquery/src/data/var/dataPriv.js',
'lib/jquery/src/data/var/dataUser.js',
'lib/jquery/src/data.js',
'lib/jquery/src/deferred/exceptionHook.js',
'lib/jquery/src/deferred.js',
'lib/jquery/src/deprecated.js',
'lib/jquery/src/dimensions.js',
'lib/jquery/src/effects/animatedSelector.js',
'lib/jquery/src/effects/support.js',
'lib/jquery/src/effects/Tween.js',
'lib/jquery/src/effects.js',
'lib/jquery/src/event/ajax.js',
'lib/jquery/src/event/alias.js',
'lib/jquery/src/event/focusin.js',
'lib/jquery/src/event/support.js',
'lib/jquery/src/event/trigger.js',
'lib/jquery/src/event.js',
'lib/jquery/src/exports/amd.js',
'lib/jquery/src/exports/global.js',
'lib/jquery/src/intro.js',
'lib/jquery/src/jquery.js',
'lib/jquery/src/manipulation/_evalUrl.js',
'lib/jquery/src/manipulation/buildFragment.js',
'lib/jquery/src/manipulation/createSafeFragment.js',
'lib/jquery/src/manipulation/getAll.js',
'lib/jquery/src/manipulation/setGlobalEval.js',
'lib/jquery/src/manipulation/support.js',
'lib/jquery/src/manipulation/var/nodeNames.js',
'lib/jquery/src/manipulation/var/rcheckableType.js',
'lib/jquery/src/manipulation/var/rleadingWhitespace.js',
'lib/jquery/src/manipulation/var/rscriptType.js',
'lib/jquery/src/manipulation/var/rtagName.js',
'lib/jquery/src/manipulation/wrapMap.js',
'lib/jquery/src/manipulation.js',
'lib/jquery/src/offset.js',
'lib/jquery/src/outro.js',
'lib/jquery/src/queue/delay.js',
'lib/jquery/src/queue.js',
'lib/jquery/src/selector-native.js',
'lib/jquery/src/selector-sizzle.js',
'lib/jquery/src/selector.js',
'lib/jquery/src/serialize.js',
'lib/jquery/src/support.js',
'lib/jquery/src/traversing/findFilter.js',
'lib/jquery/src/traversing/var/dir.js',
'lib/jquery/src/traversing/var/rneedsContext.js',
'lib/jquery/src/traversing/var/siblings.js',
'lib/jquery/src/traversing.js',
'lib/jquery/src/var/arr.js',
'lib/jquery/src/var/class2type.js',
'lib/jquery/src/var/concat.js',
'lib/jquery/src/var/deletedIds.js',
'lib/jquery/src/var/document.js',
'lib/jquery/src/var/documentElement.js',
'lib/jquery/src/var/hasOwn.js',
'lib/jquery/src/var/indexOf.js',
'lib/jquery/src/var/pnum.js',
'lib/jquery/src/var/push.js',
'lib/jquery/src/var/rcssNum.js',
'lib/jquery/src/var/rnotwhite.js',
'lib/jquery/src/var/slice.js',
'lib/jquery/src/var/support.js',
'lib/jquery/src/var/toString.js',
'lib/jquery/src/wrap.js',
'lib/jquery-touch-events/index.js',
'lib/jquery-touch-events/LICENSE',
'lib/jquery-touch-events/package.json',
'lib/jquery-touch-events/README.md',
'lib/jsSHA/src/sha1.js',
'lib/ng-twitter-api/.bower.json',
'lib/ng-twitter-api/dist/ng-twitter-api.js',
'lib/ng-twitter-api/dist/ng-twitter-api.min.js',
'lib/ng-twitter-api/Gruntfile.js',
'lib/ng-twitter-api/src/twitter-functions.js',
'lib/ng-twitter-api/src/twitter-plugin.js',
'lib/ng-twitter-api/src/twitter-utils.js',
'lib/ngCordova/dist/ng-cordova.js',
'lib/ngCordovaOauth/dist/ng-cordova-oauth.js',
'lib/ngCordovaOauth/dist/ng-cordova-oauth.min.js',
'lib/sha1.js',
'manifest.json',
'scripts/app.js'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  /*
   * Fixes a corner case in which the app wasn't returning the latest data.
   * You can reproduce the corner case by commenting out the line below and
   * then doing the following steps: 1) load app for first time so that the
   * initial New York City data is shown 2) press the refresh button on the
   * app 3) go offline 4) reload the app. You expect to see the newer NYC
   * data, but you actually see the initial data. This happens because the
   * service worker is not yet activated. The code below essentially lets
   * you activate the service worker faster.
   */
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch', e.request.url);
  var dataUrl = 'https://query.yahooapis.com/v1/public/yql';
  if (e.request.url.indexOf(dataUrl) > -1) {
    /*
     * When the request URL contains dataUrl, the app is asking for fresh
     * weather data. In this case, the service worker always goes to the
     * network and then caches the response. This is called the "Cache then
     * network" strategy:
     * https://jakearchibald.com/2014/offline-cookbook/#cache-then-network
     */
    e.respondWith(
      caches.open(dataCacheName).then(function(cache) {
        return fetch(e.request).then(function(response){
          cache.put(e.request.url, response.clone());
          return response;
        });
      })
    );
  } else {
    /*
     * The app is asking for app shell files. In this scenario the app uses the
     * "Cache, falling back to the network" offline strategy:
     * https://jakearchibald.com/2014/offline-cookbook/#cache-falling-back-to-network
     */
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  }
});
