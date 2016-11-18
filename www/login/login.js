app.controller('LoginController', LoginController);

function LoginController($scope, $state, $ionicSlideBoxDelegate, $ionicSideMenuDelegate, ngFB) {

  //Called to navigate to the main app
  $scope.startApp = function() {
    $state.go('login');
  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };

  $ionicSideMenuDelegate.canDragContent(false);

  $scope.fbLogin = function () {
    ngFB.login({scope: 'email,read_stream'}).then(
      function (response) {
        if (response.status === 'connected') {
          console.log('Facebook login succeeded');
          //$scope.closeLogin();
          $state.go('home');
        } else {
          alert('Facebook login failed');
        }
    });
  };
}
