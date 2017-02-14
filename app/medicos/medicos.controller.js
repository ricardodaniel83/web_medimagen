angular
  .module('app')
  .controller('medicosCtrl',medicosCtrl);

  medicosCtrl.$inject =['$rootScope','dataService','$scope'];

  function medicosCtrl($rootScope, dataService,$scope){
      var medicos = this;
      medicos.contentPage = [];
      medicos.myInterval = 3000;
      medicos.noWrapSlides = false;
      medicos.active = 0;
      medicos.urlSlider =   $rootScope.urlImg +"slider/";
      medicos.slides =[];
      init();
      function init(){
          getContentPage(7);
          getSlider(40);
      }

      function getContentPage(nid){
        dataService.getNode(nid).then(function(result){
            medicos.contentPage = result;

        });
      }

      function getSlider(nid){
        dataService.getNode(nid).then(function(result){
            medicos.slides = result.field_galeria.und;

        });
      }

  }
