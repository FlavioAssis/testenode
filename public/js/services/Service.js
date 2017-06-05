angular.module('teste').factory('Service', function($resource) {
  return $resource('/dados/:id');
});
