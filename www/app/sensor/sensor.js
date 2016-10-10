(function(){
  'use strict';
  angular
    .module('app.sensor')
    .controller('Sensor', Sensor);

  function Sensor($stateParams){
    var vm=this;
    vm.data={};
    vm.data.sensor=($stateParams.param);
    /*
    Funcion llamanda desde el mqqt
     */
   

  }
})();
