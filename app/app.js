angular
    .module('app',
    [
      'ngRoute',
      'ui.router'
    ])
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
                },
             }

         })

    });
