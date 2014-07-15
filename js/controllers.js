angular.module('sol.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout, $log) {

    $log.info('AppCtrl loaded');


    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.loginDialog = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
        $scope.loginDialog.hide();
        //$scope.loginDialog.remove();
    },

    // Open the login modal
    $scope.openLogin = function () {
        $scope.loginDialog.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function () {
            $scope.closeLogin();
        }, 1000);
    };

})

.controller('MapCtrl', function ($scope, $log) {
    $log.info('Loading MapCtrl');

    var mapOptions = {
        // 49.7478795, 13.3619641
        center: new google.maps.LatLng(49.7478795, 13.3619641),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 17,
        streetViewControl: false,
        zoomControl: false,
        mapTypeControl: false,
        panControl: false
    };


    var mapElement = document.getElementById("map");
    $log.info(mapElement);

    var map = new google.maps.Map(mapElement, mapOptions);

    $log.info(mapElement);

    $log.info('MapCtrl map');

    var $tabs = angular.element(document.getElementById('nav-tabs'));
    $tabs.addClass('transparent');

    $scope.$on('$destroy', function () {
        $log.info('Destroying MapCtrl');
        $tabs.removeClass('transparent');
    });
})

.controller('PlaylistsCtrl', function ($scope, $ionicLoading, $timeout) {

    var spinnerHtml = '<span data-animation="true" data-tags="spinner, waiting, refresh, animation" data-pack="default" class="ion-loading-c"></span>';
    $scope.loading = $ionicLoading.show({ content: 'Načítám...' + spinnerHtml });

    // give user chance to read error message before allowing to try again
    $timeout(function () {
        $scope.loading.hide();
    }, 2000);


    $scope.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];
})

.controller('PlaylistCtrl', function ($scope, $stateParams) {

})

//.controller('RozvrhCtrl', function ($scope) {
//    $scope.rozvrh = [
//        { id: 1, obdobiDne: '1.', casKonani: '08:00-08:45', zkratka: 'ČJL', nazev: 'Český jazyk a literatura', info: 'UC1, 3.A' },
//        { id: 2, obdobiDne: '2.', casKonani: '08:00-08:45', zkratka: 'ČJL', nazev: 'Český jazyk a literatura', info: 'UC1, 3.A' },
//        { id: 3, obdobiDne: '3.', casKonani: '08:00-08:45', zkratka: 'ČJL', nazev: 'Český jazyk a literatura', info: 'UC1, 3.A' },
//        { id: 4, obdobiDne: '4.', casKonani: '08:00-08:45', zkratka: 'ČJL', nazev: 'Český jazyk a literatura', info: 'UC1, 3.A' },
//        { id: 5, obdobiDne: '5.', casKonani: '08:00-08:45', zkratka: 'ČJL', nazev: 'Český jazyk a literatura', info: 'UC1, 3.A' },
//        { id: 6, obdobiDne: '6.', casKonani: '08:00-08:45', zkratka: 'ČJL', nazev: 'Český jazyk a literatura', info: 'UC1, 3.A' },
//        { id: 7, obdobiDne: '7.', casKonani: '08:00-08:45', zkratka: 'ČJL', nazev: 'Český jazyk a literatura', info: 'UC1, 3.A' },
//        { id: 8, obdobiDne: '8.', casKonani: '08:00-08:45', zkratka: 'ČJL', nazev: 'Český jazyk a literatura', info: 'UC1, 3.A' },
//        { id: 9, obdobiDne: '9.', casKonani: '08:00-08:45', zkratka: 'ČJL', nazev: 'Český jazyk a literatura', info: 'UC1, 3.A' },
//        { id: 10, obdobiDne: '10.', casKonani: '08:00-08:45', zkratka: 'ČJL', nazev: 'Český jazyk a literatura', info: 'UC1, 3.A' }
//    ];
//})


.controller('RozvrhCtrl', function ($scope, Rozvrh) {
    $scope.rozvrh = Rozvrh.all();
})

.controller('RozvrhDetailCtrl', function ($scope, $stateParams, Rozvrh) {
    $scope.rozvrh = Rozvrh.get($stateParams.rozvrhId);
})