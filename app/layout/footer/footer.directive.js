angular
    .module('app')
    .directive('footerContect',footer);

    function footer(){
      return {
                bindToController: true,
                //controller: sideMenuCtrl,
                //controllerAs: 'sideMenu',
                restrict: 'AE',
                templateUrl: 'app/layout/footer/footer.html'
            }

    }
