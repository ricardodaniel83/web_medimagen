angular
  .module('app')
  .controller('medicosCtrl',medicosCtrl);

  medicosCtrl.$inject =['$rootScope','dataService'];

  function medicosCtrl($rootScope, dataService){
      var medicos = this;
      medicos.contentPage = [];
      init();
      function init(){
          getContentPage(7);
      }

      function getContentPage(nid){
        dataService.getNode(nid).then(function(result){
            medicos.contentPage = result;
            
        });
      }

  }
