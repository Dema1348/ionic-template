(function(){
  'use strict';
  angular
    .module('app.sensors')
    .controller('Sensors', Sensors);

  function Sensors($scope, Storage, Services){
    var vm=this;
    vm.data={};

    /*
    Datos fakes con datos de sensores
     */
    vm.fake=[{name:'Casa fake',data:'23º',geo:{lat:23,long:232}},{name:'Chillan fake',data:'10º',geo:{lat:23,long:232}},{name:'VTR fake',data:'23º',geo:{lat:23,long:232}}]
    vm.labels = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    vm.series = ['hssat', 'hspark','hsmeteo'];
    vm.data.numbers = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90],
        [18, 38, 45, 13, 46, 47, 95]
    ];
 
    /*
    Funcion que se activa solo cuando se entra a la vista
    y carga la información disponible
     */
    $scope.$on('$ionicView.enter', function(){
   
        Services.getData().then(function(data){
          vm.data.sensor = data;
        })
        .catch(function(err) {
          console.log(err);
           vm.data.sensor=vm.fake;
        });
    });

    /*
    Funcion llamanda desde el mqqt
     */
    $scope.$on('doAlgo', function(event, data) {
          console.log(data);
    });

  }
})();
