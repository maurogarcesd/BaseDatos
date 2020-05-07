'use strict';

//Servicios que se encargan de consumir el api de base de datos
basesDeDatosApp.factory( 'BDService', function( $http, $route ){

  var servicio = {};

  servicio.listarBD=function(scope){
    
    $http.get('http://aplicacionesbiblioteca.udea.edu.co/basesdedatos/services/listarBD.PHP')
    .then(function(respuesta){
      scope.listadoBD = respuesta.data;
    })   
  }
  return servicio;
});
