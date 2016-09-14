weUniC.config(function ($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in mainCtrl.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: './js/tabs/tabs.html',
      resolve: {
        auth: ["AuthenticationService", function (AuthenticationService) {
          return AuthenticationService.checkAuth();
        }]
      }
    })

    // Each tab has its own nav history stack:

    .state('tab.home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: './js/home/tab-home.html'
        }
      }
    })

    .state('tab.travelChecklist', {
      url: '/travel-checklist',
      views: {
        'tab-home': {
          templateUrl: './js/travel-checklist/travel-checklist.html'
        }
      }
    })

    .state('tab.openDay', {
      url: '/open-day',
      views: {
        'tab-openDay': {
          templateUrl: './js/openDay/tab-open-day.html'
        }
      }
    })
    .state('tab.campus', {
      url: '/campus',
      cache: false,
      views: {
        'tab-campus': {
          templateUrl: './js/campus/tab-campus.html'
        }
      }
    })

    .state('tab.connect', {
      url: '/connect',
      cache: false,
      views: {
        'tab-connect': {
          templateUrl: './js/connect/tab-connect.html',
          controller: 'ConnectCtrl'
        }
      }
    })

    .state('tab.mentor', {
      url: '/mentor',
      views: {
        'tab-connect': {
          templateUrl: './js/connect/directive/mentor/chat-room/mentor.html',
          controller: 'MentorCtrl'
        }
      }
    })

    .state('tab.choose', {
      url: '/choose',
      views: {
        'tab-connect': {
          templateUrl: './js/connect/directive/mentor/choose.html',
          controller: 'ChatsCtrl'
        }
      }
    })

    .state('tab.chat', {
      url: '/mentor/:mentorId',
      views: {
        'tab-connect': {
          templateUrl: './js/connect/directive/mentor/chat-with-mentor/chat-with-mentor.html',
          controller: 'ChatsCtrl'
        }
      }
    })

    .state('tab.profile', {
      url: '/profile',
      views: {
        'tab-profile': {
          templateUrl: './js/profile/tab-profile.html',
          controller: "ProfileCtrl"
        }
      }
    })

    .state('tab.preferences', {
      url: '/preferences',
      cache: false,
      views: {
        'tab-profile': {
          templateUrl: './js/profile/preferences/preferences.html',
          controller: 'PreferencesCtrl'
        }
      }
    })

    .state('login', {
      url: '/login',
      templateUrl: './js/login/login.html',
      controller: "LoginCtrl"
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
