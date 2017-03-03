angular
  .module('app')
  .controller('homeCtrl',homeCtrl);

  homeCtrl.$inject =['$rootScope','dataService','$scope'];

  function homeCtrl($rootScope, dataService, $scope){
      var home = this;
      home.listServiceFather;
      home.ContentPage;
      home.urlImg = $rootScope.urlImg +"servicios_padre/";
      home.myInterval = 3000;
      home.noWrapSlides = false;
      home.active = 0;
      home.urlSlider =   $rootScope.urlImg +"slider/";
      home.slides;



      init();
      function init(){
          getServiceFather();
          getContentPage(1);
          getSlider(38);
      }

      function getServiceFather(){
          dataService.getListServiceFather().then(function(result){
                home.listServiceFather = result;

          });
      }

      function getContentPage(nid){
        dataService.getNode(nid).then(function(result){
            home.ContentPage = result;

        });
      }

      function getSlider(nid){
        dataService.getNode(nid).then(function(result){
            home.slides = result.field_galeria.und;
            console.log("Galeria:",home.slides);
        });
      }





  }
