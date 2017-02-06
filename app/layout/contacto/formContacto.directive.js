angular
    .module('app')
    .directive('formularioContacto',formularioContacto);

    function formularioContacto(){
      return {
                bindToController: true,
                //controller: sideMenuCtrl,
                //controllerAs: 'sideMenu',
                restrict: 'AE',
                templateUrl: 'app/layout/contacto/formContacto.html'
            }

    }
