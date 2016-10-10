(function(){
  'use strict';
  angular
  	.module('app.core')
  	 /*
    Constante para el endpoint de la api
     */
    .constant('API', {
      backendUrl: 'localhost:10010'
    })
    /*
    Constantes para la conexión mqtt
     */
    .constant('WSBROKER', 'www.4points.cl')
    .constant('WSPORT', 8000)
    .constant('AMBIENTE', 'Local')
    .constant('SSL',false);

})();
