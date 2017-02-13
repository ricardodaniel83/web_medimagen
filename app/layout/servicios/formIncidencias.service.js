angular
  .module('app')
  .factory('dataIncidencias',dataIncidencias);

  dataIncidencias.$inject=['$http','$rootScope','$q'];

  function dataIncidencias($http, $rootScope, $q){
        return {
            getDepartamentos : getDepartamentos,
            getAsuntos : getAsuntos,
            getUrgencia : getUrgencia,
        }

        function getDepartamentos(){
            return [
              {id:1,name:"ADMINSTRACION – RECURSOS HUMANOS"},
              {id:2,name:"GERENCIA"},
              {id:3,name:"INTERPRETACION"},
              {id:4,name:"RESCEPCION"},
              {id:5,name:"TOMOGRAFIA"},
              {id:6,name:"RESOANCIA"},
              {id:7,name:"RAYOS X 1 (SIEMEN)"},
              {id:8,name:"RAYOS X 2 (QUAMTUM)"},
              {id:9,name:"DENSITOMETRIA"},
              {id:10,name:"ECOGRAFIA 1 (LOGIC S8)"},
              {id:11,name:"ECOGRAFIA 2 ( VOLUSON E8)"},
            ];
        }

        function getAsuntos(){
          return [
            {id:1,name:"ERRORES DE CONECTIVIDAD INTERNET"},
            {id:2,name:"ERRORES DE ACCESO AL SISTEMA"},
            {id:3,name:"CORREO ELECTRONICO"},
            {id:4,name:"SISTEMA DE FACTURACION"},
            {id:5,name:"PROBLEMAS ELECTRICOS"},
            {id:6,name:"SISTEMA DE IMPRESIÓN"},
            {id:7,name:"PROBLEMAS DE EQUIPOS DE COMPUTO"},
            {id:8,name:"DAÑO DE PERIFERICOS."},
            {id:9,name:"DAÑO SE SISTEMA ECLINIC"},
            {id:10,name:"DAÑO SISTENA EPACS."},
            {id:11,name:"DAÑOS DE INFRAESTRUCTURA"},
          ];
        }

        function getUrgencia(){
          return [
            {id:1,name:"ALTA"},
            {id:2,name:"MEDIA"},
            {id:3,name:"BAJA"},
          ]
        }

  }
