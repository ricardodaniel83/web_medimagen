angular
  .module('app')
  .controller('serviciosCtrl',serviciosCtrl);

  serviciosCtrl.$inject =['$rootScope','dataService','$stateParams','$scope'];

  function serviciosCtrl($rootScope, dataService, $stateParams, $scope){
      var servicios = this;
      servicios.listChildren = [];
      servicios.listFather = {};
      servicios.paramas = $stateParams;
      servicios.listServiceFather =[];
      servicios.urlImg = $rootScope.urlImg +"servicios_padre/";
      servicios.urlGalery = $rootScope.urlImg + "servicios/";
      servicios.myInterval = 3000;
      servicios.noWrapSlides = false;
      servicios.active = 0;
      servicios.urlSlider =   $rootScope.urlImg +"slider/";
      servicios.slides =[];
      servicios.galery=[];
      servicios.formulario ={
          servicio:'',
          nombre:'',
          apellido:'',
          telefono:'',
          email:'',
          fecha:'',
      };
      servicios.numberLoaded = false;
      servicios.slickConfig = {
            enabled: true,
            autoplay: true,
            draggable: false,
            autoplaySpeed: 3000,
            slidesToShow: 4,
            slidesToScroll:4,
            method: {},

            event: {
                beforeChange: function (event, slick, currentSlide, nextSlide) {
                },
                afterChange: function (event, slick, currentSlide, nextSlide) {
                }
            },
            responsive: [
                       {
                         breakpoint: 1024,
                         settings: {
                           slidesToShow: 3,
                           slidesToScroll: 3,
                           infinite: true,
                           dots: true
                         }
                       },
                       {
                         breakpoint: 600,
                         settings: {
                           slidesToShow: 2,
                           slidesToScroll: 2
                         }
                       },
                       {
                         breakpoint: 480,
                         settings: {
                           slidesToShow: 1,
                           slidesToScroll: 1
                         }
                       }
                ]

        };
      servicios.loadPestana = loadPestana;
      servicios.enviar = enviar;

      init();

      function init(){
          getServiceFather();
          getContentPage(servicios.paramas.id);
          searchChildren(servicios.paramas.id);
          getSlider(38);
      }

      function searchChildren(idFather){
          dataService.getListServiceChildren(idFather).then(function(result){
              servicios.listChildren = result;
              if(servicios.listChildren.length > 0 )
                searchPestanas(servicios.listChildren[0],0);
          });
      }

      function getContentPage(nid){
        dataService.getNode(nid).then(function(result){
            servicios.listFather = result;
            servicios.galery = result.field_galeria.und;

            dataService.getPestanaColeccion(nid).then(function(result){
                servicios.listFather.pestanas = result;
                servicios.formulario.servicio =  servicios.listFather.title;
                servicios.numberLoaded = true;
            });
        });
      }

      function searchPestanas(item,count){
          dataService.getPestanaColeccion(item.nid).then(function(result){

              item.pestanas = result;

              if(count >= servicios.listChildren.length - 1 ){
                console.log("Final:",servicios.listChildren);
                return ;
              }else{
                count ++;
                searchPestanas(servicios.listChildren[count],count)
              }
          });
      }

      function getServiceFather(){
          dataService.getListServiceFather().then(function(result){
                servicios.listServiceFather = result;

          });
      }

      function loadPestana(item){
          console.log(item);
          servicios.listFather.pestanas = item.pestanas
      }

      function enviar(){
        console.log(servicios.formulario);
         if(validarFormulario()){
           dataService.sendContact(servicios.formulario,"Agenda").then(function(result){
              bootbox.alert("Su formulario a sido enviado con exito");
           });
         }
      }

      function validarFormulario(){
        var mensaje = "";
        if(servicios.formulario.servicio == ''){
          mensaje +="<li>No selecciono el servicio</li>";
        }
        if(servicios.formulario.nombre == ''){
          mensaje +="<li>No ingreso su Nombre y Apellido</li>";
        }

        if(servicios.formulario.email == ''){
          mensaje +="<li>No ingreso su correo electronico</li>";
        }
        if(servicios.formulario.telefono == ''){
          mensaje +="<li>No ingreso su teléfono de contacto</li>";
        }
        if(mensaje.length >0){
          bootbox.alert("No se a podido enviar el formulario  por :<ul style='margin-left:20px;'>"+mensaje+"</ul>")
          return false;
        }else{
          return true;
        }

      }

      function getSlider(nid){
        dataService.getNode(nid).then(function(result){
            servicios.slides = result.field_galeria.und;

        });
      }





  }
