angular
    .module('app')
    .directive('sideMenu',sideMenu);

    function sideMenu(){

      /*function sideMenuCtrl(){
          var sideMenu = this;
          sideMenu.goService(id){

          }
      }*/

      return {
                bindToController: true,
                //controller: sideMenuCtrl,
                //controllerAs: 'sideMenu',
                restrict: 'AE',
                templateUrl: 'app/layout/menu/sideMenu.html'
            }

    }
