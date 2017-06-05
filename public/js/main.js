var cliente = angular.module('teste', ['ngRoute', 'ngResource']);

cliente.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider.when('/dados', {
    templateUrl: 'templates/teste.html',
    controller: 'Conteste'
  });
});
