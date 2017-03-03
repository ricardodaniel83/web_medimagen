angular
    .module('app')
    .directive('footerRuna',footerRuna);

    function footerRuna(){
      return {
                bindToController: true,
                //controller: sideMenuCtrl,
                //controllerAs: 'sideMenu',
                restrict: 'AE',
                templateUrl: 'app/layout/runasapiens/runa.html'
            }

    }
