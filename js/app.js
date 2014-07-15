// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'sol' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'sol.controllers' is found in controllers.js
angular.module('sol', ['ionic', 'sol.controllers', 'sol.services'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
          url: "/app",
          abstract: true,
          templateUrl: "templates/main.html",
          controller: 'AppCtrl'
      })

      .state('app.search', {
          url: "/search",
          views: {
              'mainContent': {
                  templateUrl: "templates/search.html"
              }
          }
      })

      .state('app.browse', {
          url: "/browse",
          views: {
              'mainContent': {
                  templateUrl: "templates/browse.html"
              }
          }
      })

      .state('app.playlists', {
          url: "/playlists",
          views: {
              'mainContent': {
                  templateUrl: "templates/playlists.html",
                  controller: 'PlaylistsCtrl'
              }
          }
      })

      .state('app.single', {
          url: "/playlists/:playlistId",
          views: {
              'mainContent': {
                  templateUrl: "templates/playlist.html",
                  controller: 'PlaylistCtrl'
              }
          }
      })

      .state('app.rozvrh', {
          url: "/rozvrh",
          views: {
              'mainContent': {
                  templateUrl: "templates/rozvrh.html",
                  controller: 'RozvrhCtrl'
              }
          }
      })

    .state('app.rozvrh-detail', {
        url: '/rozvrh/:rozvrhId',
        views: {
            'mainContent': {
                templateUrl: 'templates/rozvrh-detail.html',
                controller: 'RozvrhDetailCtrl'
            }
        }
    })



      .state('app.o-aplikaci', {
          url: "/o-aplikaci",
          views: {
              'mainContent': {
                  templateUrl: "templates/o-aplikaci.html"
              }
          }
      })

      .state('app.nastaveni', {
          url: "/nastaveni",
          views: {
              'mainContent': {
                  templateUrl: "templates/nastaveni.html"
              }
          }
      })


    .state('app.map', {
        url: '/map',
        views: {
            'mainContent': {
                templateUrl: 'templates/map.html',
                controller: 'MapCtrl'
            }
        }
    })

    ;

    // if none of the above states are matched, use this as the fallback
    //$urlRouterProvider.otherwise('/app/playlists');
    $urlRouterProvider.otherwise('/app/rozvrh');
});

