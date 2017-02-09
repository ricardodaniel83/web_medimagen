angular
  .module('app')
  .controller('serviciosCtrl',serviciosCtrl);

  serviciosCtrl.$inject =['$rootScope','dataService','$stateParams'];

  function serviciosCtrl($rootScope, dataService, $stateParams){
      var servicios = this;
      servicios.listChildren = [];
      servicios.listFather = {};
      servicios.paramas = $stateParams;
      servicios.listServiceFather =[];
      servicios.urlImg = $rootScope.urlImg +"servicios_padre/";

      init();

      function init(){
          getServiceFather();
          getContentPage(servicios.paramas.id);
          searchChildren(servicios.paramas.id);
      }

      function searchChildren(idFather){
          dataService.getListServiceChildren(idFather).then(function(result){
              servicios.listChildren = result;
              if(servicios.listChildren.length > 0 )
                searchPestanas(servicios.listChildren[0],0);
          });
      }

      function getContentPage(nid){
        dataService.getNode(nid).then(function(result){
            servicios.listFather = result;
            dataService.getPestanaColeccion(nid).then(function(result){
                servicios.listFather.pestanas = result;
                console.log("Padre:",servicios.listFather);
            });
        });
      }

      function searchPestanas(item,count){
          dataService.getPestanaColeccion(item.nid).then(function(result){

              item.pestanas = result;

              if(count >= servicios.listChildren.length - 1 ){
                console.log("Final:",servicios.listChildren);
                return ;
              }else{
                count ++;
                searchPestanas(servicios.listChildren[count],count)
              }
          });
      }

      function getServiceFather(){
          dataService.getListServiceFather().then(function(result){
                servicios.listServiceFather = result;
                console.log("Servicios:",servicios.listServiceFather);
          });
      }



  }
