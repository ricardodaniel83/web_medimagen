angular
  .module('app')
  .controller('nosotrosCtrl',nosotrosCtrl);

  nosotrosCtrl.$inject =['$rootScope','dataService'];

  function nosotrosCtrl($rootScope, dataService){
      var nosotros = this;
      nosotros.contentPage = [];
      nosotros.getSlider =[];
      nosotros.myInterval = 3000;
      nosotros.noWrapSlides = false;
      nosotros.active = 0;
      nosotros.urlSlider =   $rootScope.urlImg +"slider/";
      nosotros.slides =[];
      
      init();
      function init(){
          getContentPage(6);
          getSlider(8)
      }

      function getContentPage(nid){
        dataService.getNode(nid).then(function(result){
            nosotros.contentPage = result;
            console.log(nosotros.contentPage);
        });
      }

      function getSlider(nid){
        dataService.getNode(nid).then(function(result){
            nosotros.slides = result.field_galeria.und;

        });
      }

  }
