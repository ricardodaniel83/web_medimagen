angular
    .module('app')
    .directive('sideMenu',sideMenu);

    function sideMenu(){
      return {
                bindToController: true,
                //controller: sideMenuCtrl,
                //controllerAs: 'sideMenu',
                restrict: 'AE',
                templateUrl: 'app/layout/menu/sideMenu.html'
            }

    }
