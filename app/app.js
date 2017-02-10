angular
    .module('app',
    [
      'ngAnimate',
      'ngSanitize',
      'ngRoute',
      'ui.router',
      'ui.bootstrap',
    ])
    .run(function($rootScope){
      $rootScope.dominio ='';
      $rootScope.api ='/medimagenes/api/';
      $rootScope.imagenes = '/medimagenes/sites/default/files/'
      $rootScope.url = $rootScope.dominio + $rootScope.api;
      $rootScope.urlImg = $rootScope.dominio + $rootScope.imagenes;
    })
    .config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise("/home");
        $stateProvider
         .state('galery', {
             url: "/galery",
             views:{
               "main":{
                  templateUrl: "app/galery/slider/sliderGalery.html",
                  controller: "sliderGaleryCtrl",
                  controllerAs:"sliderGalery"
               },

             }

         })
         .state('home', {
             url: "/home",
             views:{
                "main":{
                   templateUrl: "app/home/home.html",
                   controller: "homeCtrl",
                   controllerAs:"home"
                },
             }

         })

         .state('nosotros', {
             url: "/nosotros",
             views:{
                "main":{
                   templateUrl: "app/nosotros/nosotros.html",
                   controller: "nosotrosCtrl",
                   controllerAs:"nosotros"
                },
             }

         })

         .state('medicos', {
             url: "/medicos",
             views:{
                "main":{
                   templateUrl: "app/medicos/medicos.html",
                   controller: "medicosCtrl",
                   controllerAs:"medicos"
                },
             }

         })

         .state('servicios', {
             url: "/servicios/:id",
             views:{
                "main":{
                   templateUrl: "app/servicios/servicios.html",
                   controller: "serviciosCtrl",
                   controllerAs:"servicios"
                },
             }

         })

    });
