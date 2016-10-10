(function(){
  'use strict';
  angular.module('app.settings')
    .controller('Settings', Settings);

  function Settings($scope, Storage, UiUtils, resolvedSettings){
    var vm=this
    vm.data={};

    /*
    resolvedSettings contiene las configuraciones del usuario guardadas en el storage
     */
    vm.data.settings = resolvedSettings;

    /*
    Observa las variables y las actualiza 
     */
    $scope.$watch('vm.data.settings', function(settings, oldSettings){
      if(settings && oldSettings && !angular.equals(settings, oldSettings)){
        Storage.setUserSettings(settings).then(function(){
          UiUtils.showToast('Settings registradas');
        });
      }
    }, true);
  }
})();
