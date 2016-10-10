(function(){
  'use strict';
  angular.module('app.menu')
    .controller('Menu', Menu);

  function Menu($state, $scope, $ionicHistory, Storage){
    var vm = this;
    vm.logout = logout;

    function logout(){
      Storage.clear().then(function(){
        $ionicHistory.clearHistory();
        $ionicHistory.clearCache();
        $state.go('login');
      });
    };

  }
})();
