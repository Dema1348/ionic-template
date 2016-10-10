(function() {
    'use strict';

    angular
        .module('app.paho')
        .factory('Paho', Paho);

    /*
    Factory para el cliente mqtt
     */
    function Paho() {
        return window.Paho.MQTT;
    }
})();