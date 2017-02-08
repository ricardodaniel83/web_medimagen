angular
  .module('app')
  .controller('homeCtrl',homeCtrl);

  homeCtrl.$inject =['$rootScope','dataService'];

  function homeCtrl($rootScope, dataService ){
      var home = this;
      home.listServiceFather = [];
      home.ContentPage = {};
      home.urlImg = $rootScope.urlImg +"servicios_padre/";
      home.searchService = searchService;
      init();
      function init(){
          getServiceFather();
          getContentPage(1);
      }

      function getServiceFather(){
          dataService.getListServiceFather().then(function(result){
                home.listServiceFather = result;
                console.log("Servicios Padre:",home.listServiceFather);
          });
      }

      function getContentPage(nid){
        dataService.getNode(nid).then(function(result){
            home.ContentPage = result;
            console.log("Pagina:",home.ContentPage);
        });

      }

      function searchService(item){

      }

  }
