'use strict';

basesDeDatosApp.controller('CtrlListaBD', ['$route','$scope', '$location', '$http', 'BDService', 'filterFilter', controladorBD]);

    function controladorBD($route,$scope, $location, $http, BDService, filterFilter) {
        $scope.useMakes = [];
        BDService.listarBD($scope); 

        $scope.redirect = function(url){
        window.location.href=url.url;
        };
};

jQuery('.dropdown-toggle').on('click', function (e) {
  $(this).next().toggle();  
});

jQuery('.dropdown-menu.keep-open').on('click', function (e) {
  e.stopPropagation();
});


if(1) {
  $('body').attr('tabindex', '0');
}
else {
  alertify.confirm().set({'reverseButtons': true});
  alertify.prompt().set({'reverseButtons': true});
}