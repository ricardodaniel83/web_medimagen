angular
    .module('app')
    .directive('formularioContacto',formularioContacto);

    function formularioContacto(){
      function layoutContactCtrl(dataService){
          var layoutContact = this;
          layoutContact.formulario ={
            nombre:'',
            telefono:'',
            email:'',
            mensaje:''
          };
          layoutContact.enviar = enviar;


          function enviar(){
              if(validarFormulario()){
                dataService.sendContact(layoutContact.formulario,"Contacto").then(function(result){
                   bootbox.alert("Su formulario a sido enviado con exito");
                });
              }

          }

          function validarFormulario(){
            var mensaje = "";

            if(layoutContact.formulario.nombre == ''){
              mensaje +="<li>No ingreso su Nombre y Apellido</li>";
            }

            if(layoutContact.formulario.email == ''){
              mensaje +="<li>No ingreso su correo electronico</li>";
            }
            if(layoutContact.formulario.telefono == ''){
              mensaje +="<li>No ingreso su teléfono de contacto</li>";
            }
            if(layoutContact.formulario.mensaje == ''){
              mensaje +="<li>No ingreso  mensaje</li>";
            }
            if(mensaje.length >0){
              bootbox.alert("No se a podido enviar el formulario  por :<ul style='margin-left:20px;'>"+mensaje+"</ul>")
              return false;
            }else{
              return true;
            }

          }

      }

      return {
                bindToController: true,
                controller: layoutContactCtrl,
                controllerAs: 'layoutContact',
                restrict: 'AE',
                templateUrl: 'app/layout/contacto/formContacto.html'
            }

    }
