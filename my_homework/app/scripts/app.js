'use strict';
(function(){
angular
  .module('auction', [
    'ngResource',
    'ngRoute'
  ]).config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController',
        controllerAs: 'ctrl'
      })
      .when('search', {
        templateUrl: 'views/search.html'
      })
      .when('product', {
        templateUrl: 'views/product.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
}());
