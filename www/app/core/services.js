(function(){
  'use strict';
  angular
    .module('app.core')
    .factory('Services', Services);

  function Services($http, Storage, API){
    return {
      getData: getData
    };

    function getData(){
      return $http
                  .get(API.backendUrl+'/sensor')
                  .then(function(res){
                    return res.data;
                  });
        
    }
  }
})();