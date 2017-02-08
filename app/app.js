angular
    .module('app',
    [
      'ngSanitize',
      'ngRoute',
      'ui.router'
    ])
    .run(function($rootScope){
      $rootScope.dominio ='http://localhost';
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

    });
