angular
  .module('app')
  .controller('nosotrosCtrl',nosotrosCtrl);

  nosotrosCtrl.$inject =['$rootScope','dataService'];

  function nosotrosCtrl($rootScope, dataService){
      var nosotros = this;
      nosotros.contentPage = [];
      init();
      function init(){
          getContentPage(6);
      }

      function getContentPage(nid){
        dataService.getNode(nid).then(function(result){
            nosotros.contentPage = result;
            console.log(nosotros.contentPage);
        });
      }

  }
