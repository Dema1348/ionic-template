(function(){
  'use strict';
  angular
    .module('app.login')
    .controller('Login', Login);

  function Login($scope, $state, Storage){
    var vm = this;
    vm.login= login;
    vm.data={};

    vm.data.credentials = {
      login: '',
      password: ''
    };

     function login (credentials){
      console.dir(credentials);
      $state.go('app.sensors');
      
      
    };
  }
})();
