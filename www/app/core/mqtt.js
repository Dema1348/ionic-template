(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('MQTT', MQTT);

    function MQTT(Paho, AMBIENTE, WSBROKER, SSL,WSPORT, $timeout, $rootScope, $state, DevicePlugin) {
        var utils;
        var cliente;
        var destino = "/iot";
        var suscripciones = ["/smart/sensor/hssat","/smart/sensor/hspark","/smart/sensor/hsmeteo"];
        var reconnectTimeout = 1000;


       

        utils = {
            crearCliente: crearCliente,
            cerrarConexion: cerrarConexion
        };

        return utils;

        function crearCliente() {
        	return DevicePlugin
        			.getDevice()
        		    .then(function(device) {
        		    	var UUID = device.uuid;
        		    	var mqttServer = WSBROKER;
			            var mqttPort = WSPORT;
			            var mqttCliente = UUID;
			            var options = {
			                timeout: 1,
			                cleanSession: false,
			                reconnect: true,
			                onSuccess: onConnect,
			                useSSL: SSL,
			                onFailure: function(message) {
			                    console.dir(message);
			                    $timeout(crearCliente, reconnectTimeout);
			                }
			            };
			            cliente = new Paho.Client(mqttServer, mqttPort, mqttCliente);
			            cliente.onConnectionLost = onConnectionLost;
			            cliente.onMessageArrived = onMessageArrived;
			            cliente.connect(options);
			            return cliente;
			        })
            
           
        }


       



        function cerrarConexion() {
            try {
                cliente.disconnect();
                console.log("Desconectando");
            } catch (err) {
                console.log(err);
            }

        }


        function onConnectionLost(responseObject) {
            console.log(responseObject);
            if (responseObject.errorCode !== 0) {
                console.log("onConnectionLost:" + responseObject.errorMessage);
            }
        }


        function onConnect() {
            for (var i = 0; i < suscripciones.length; i++) {
            	console.log('Cliente conectado al topico '+ suscripciones[i]);
            	cliente.subscribe( suscripciones[i]);
        	};

        }


        function onMessageArrived(message) {
            var msg = JSON.parse(message.payloadString);
            switch (msg.messageType) {
                case 200:
                    doAlgo(msg);
                    break;
                default:
                    break;
            }
            console.log("onMessageArrived:" + message.payloadString);
        }

        function doAlgo(msg) {
        	/*
        	Ejecuta una accion en un controlador
        	 */
            $rootScope.$broadcast('doAlgo');

        }


        

    }

})();