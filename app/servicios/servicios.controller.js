angular
  .module('app')
  .controller('serviciosCtrl',serviciosCtrl);

  serviciosCtrl.$inject =['$rootScope','dataService','$stateParams'];

  function serviciosCtrl($rootScope, dataService, $stateParams){
      var servicios = this;
      servicios.listChildren = [];
      servicios.listFather = {};
      servicios.paramas = $stateParams;
      servicios.listServiceFather =[];
      servicios.urlImg = $rootScope.urlImg +"servicios_padre/";
      servicios.myInterval = 3000;
      servicios.noWrapSlides = false;
      servicios.active = 0;
      servicios.urlSlider =   $rootScope.urlImg +"slider/";
      servicios.slides =[];
      servicios.formulario ={
          servicio:'',
          nombre:'',
          apellido:'',
          telefono:'',
          email:'',
          fecha:'',
      };
      servicios.loadPestana = loadPestana;
      servicios.enviar = enviar;

      init();

      function init(){
          getServiceFather();
          getContentPage(servicios.paramas.id);
          searchChildren(servicios.paramas.id);
          getSlider(8);
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
            dataService.getPestanaColeccion(nid).then(function(result){
                servicios.listFather.pestanas = result;
                servicios.formulario.servicio =  servicios.listFather.title;
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
              console.log(result);
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
