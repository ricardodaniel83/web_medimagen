angular
  .module('app')
  .factory('dataService',dataService);

  dataService.$inject=['$http','$rootScope','$q'];

  function dataService($http, $rootScope,$q){
      return {
         getListServiceFather: getListServiceFather,
         getListServiceChildren : getListServiceChildren,
         getPestanaColeccion : getPestanaColeccion,
         getNode : getNode,
         sendContact: sendContact,
      }

      function getListServiceFather(){
        var defered = $q.defer();
        var promise = defered.promise;
        $http.post($rootScope.url+'paginas/1/serviceFather',
                  { runa:'123'},
                  {headers: {'Content-Type': 'application/json'}
              })
                    .then(function(response){
                         defered.resolve(response.data);
                    })
                    .catch(function(err){
                       defered.reject(err);
                    });
        return promise;

      }
      function getListServiceChildren(idFather){
          var defered = $q.defer();
          var promise = defered.promise;
          $http.post($rootScope.url+'paginas/'+ idFather +'/serviceChildren',
                    { runa:'123'},
                    {headers: {'Content-Type': 'application/json'}
                })
                  .then(function(response){
                     defered.resolve(response.data);
                  })
                  .catch(function(err){
                     defered.reject(err);
                  });
          return promise;
      }

      function getPestanaColeccion(nid){
            var defered = $q.defer();
            var promise = defered.promise;
            $http.post($rootScope.url+'paginas/'+ nid +'/pestanaColeccion',
                      { runa:'123'},
                      {headers: {'Content-Type': 'application/json'}
                  })
                          .then(function(response){
                             defered.resolve(response.data);
                          })
                          .catch(function(err){
                             defered.reject(err);
                          });
            return promise;
      }
      function getNode(nid){
        var defered = $q.defer();
        var promise = defered.promise;
          $http.get($rootScope.url+'paginas/'+nid)
              .then(function(response){
                  defered.resolve(response.data);
              })
              .catch(function(err){
                 defered.reject(err);
              });
         return promise;
      }

      function sendContact(datos, tipo){
        return $http.post($rootScope.url+'paginas/1/'+'formularios',
                      {tipo: tipo, data: datos, runa:'123'},
                      {headers: {'Content-Type': 'application/json'}
                    })
                    .then(function(response){
                          return response.data;
                    })
                    .catch(function(err){
                        console.log(err);
                    });
      }

  }
