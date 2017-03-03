angular
  .module('app')
  .controller('incidenciasCtrl',incidenciasCtrl);

  incidenciasCtrl.$inject =['$rootScope','dataService','$scope','dataIncidencias'];

  function incidenciasCtrl($rootScope, dataService, $scope, dataIncidencias){
      var incidencias = this;
      incidencias.myInterval = 3000;
      incidencias.noWrapSlides = false;
      incidencias.active = 0;
      incidencias.urlSlider =   $rootScope.urlImg +"slider/";
      incidencias.slides;
      incidencias.listDepartamentos=[];
      incidencias.listAsuntos = [];
      incidencias.listUrgencia =[];
      incidencias.departamento ={};
      incidencias.asunto ={};
      incidencias.urgencia={}
      incidencias.formulario ={
        nombre:'',
        email:'',
        departamento:'',
        asunto:'',
        urgencia:'',
        mensaje:'',
        adjunto:'',
      };

      incidencias.enviar = enviar;

      init();

      function init(){
          getSlider(38);
          getDatosFormulario();
      }

      function getSlider(nid){
        dataService.getNode(nid).then(function(result){
            incidencias.slides = result.field_galeria.und;
        });
      }

      function enviar(){
          if(validarFormulario()){
              incidencias.formulario.departamento = incidencias.departamento.name;
              incidencias.formulario.asunto = incidencias.asunto.name;
              incidencias.formulario.urgencia = incidencias.urgencia.name;
              dataService.sendContact(incidencias.formulario,"Incidencia").then(function(result){
                 bootbox.alert("Su formulario a sido enviado con exito");
              });
          }
      }

      function getDatosFormulario(){
          incidencias.listDepartamentos = dataIncidencias.getDepartamentos();
          incidencias.listAsuntos  = dataIncidencias.getAsuntos();
          incidencias.listUrgencia = dataIncidencias.getUrgencia();
          incidencias.urgencia = incidencias.listUrgencia[2];
      }

      function validarFormulario(){
        var mensaje = "";

        if(incidencias.formulario.nombre == ''){
          mensaje +="<li>No ingreso su Nombre</li>";
        }

        if(incidencias.formulario.email == ''){
          mensaje +="<li>No ingreso su correo electronico</li>";
        }
        if(incidencias.departamento == ''){
          mensaje +="<li>No selecciono el departamento </li>";
        }
        if(incidencias.asunto == ''){
          mensaje +="<li>No selecciono el asunto</li>";
        }
        if(incidencias.urgencia == ''){
          mensaje +="<li>No selecciono la urgencia</li>";
        }
        if(incidencias.formulario.mensaje == ''){
          mensaje +="<li>No escribio el mensaje</li>";
        }
        if(mensaje.length >0){
          bootbox.alert("No se a podido enviar el formulario  por :<ul style='margin-left:20px;'>"+mensaje+"</ul>")
          return false;
        }else{
          return true;
        }

      }


  }
