angular.module('app.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});


.controller('LoginCtrl', function($scope) {
  alert("afdffd");
    $scope.data = {};
     alert("xx");
    $scope.login = function() {

        console.log("LOGIN user: " + $scope.data.username + " - PW: " + $scope.data.password);
    }

})



  $scope.googleLogin = function($scope) {
    alert('x'); 
}

console.log('In My Method');
$cordovaOauth.google("Client ID", ["https://www.googleapis.com/auth/urlshortener", "https://www.googleapis.com/auth/userinfo.email"]).then(function(result) {
    console.log(JSON.stringify(result));
    // results
}, function(error) {
    // error
    console.log('In Error');
    console.log(error);
});
}