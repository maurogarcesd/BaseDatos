'use strict';

var basesDeDatosApp = angular.module('basesDeDatosApp', ['ngRoute','ngSanitize']);

basesDeDatosApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/listaBD.html',
    controller: 'CtrlListaBD'
  })  
  .otherwise({
    templateUrl: 'views/error404.html'
  });
}]);


