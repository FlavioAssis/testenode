angular.module('teste').controller('Conteste',
function($scope, $routeParams, Service) {

  $scope.lista = [];
 
  function busca() {
    Service.query(function(lista) {
      $scope.lista = lista;
    }, function(erro) {
      console.log(erro);
    });
  };

  busca();

});
