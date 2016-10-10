(function(){
  'use strict';
  angular.module('app', ['ionic',

                          //Modulos externos
                          'ngMap',
                          'ngLocale',
                          'chart.js',
                          //Modulos de la aplicación  
                          'app.core',
                          'app.login',
                          'app.common',
                          'app.menu',
                          'app.sensors',
                          'app.sensor',
                          'app.settings',
                          'app.paho'])
})();
