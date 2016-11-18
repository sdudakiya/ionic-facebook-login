var app = angular.module('fbauth', ['ionic', 'ngOpenFB']);

app.run(function($ionicPlatform, ngFB) {
  $ionicPlatform.ready(function() {
    ngFB.init({appId: '222940288152'});

    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('login', {
    url: '/',
    templateUrl: 'login/login.html',
    controller: 'LoginController'
  })
  .state('home', {
    url: '/home',
    templateUrl: 'home/home.html',
    controller: 'HomeController'
  });

  $urlRouterProvider.otherwise("/");
});
