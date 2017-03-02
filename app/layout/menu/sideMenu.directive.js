angular
    .module('app')
    .directive('sideMenu',sideMenu);

    function sideMenu(){

      function sideMenuCtrl(){
          var sideMenu = this;
          sideMenu.goContacto = goContacto

          function goContacto(){
             console.log("Ir al formualrio");
             var enlace ="#formContactenos";
             $('html, body').animate({
		             scrollTop: $(enlace).offset().top
		          }, 1000);
          }
      }

      return {
              bindToController: true,
              controller: sideMenuCtrl,
              controllerAs: 'sideMenu',
              restrict: 'AE',
              templateUrl: 'app/layout/menu/sideMenu.html'
            }

    }
