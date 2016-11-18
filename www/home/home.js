app.controller('HomeController', HomeController);

function HomeController($scope, $state, $ionicSideMenuDelegate, ngFB) {
  console.log('HomeController');

  ngFB.api({
      path: '/me',
      params: {fields: 'id,name'}
  })
  .then(function (user) {
      $scope.user = user;
  },
  function (error) {
    alert('Facebook error: ' + error.error_description);
  });

  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
}
