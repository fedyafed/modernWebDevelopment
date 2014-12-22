'use strict';
(function(){
angular
  .module('auction', [
    'ngResource',
    'ngRoute'
  ]).config(['$routeProvider', function($routeProvider){
    var getTitle = function(page){
      return page + ' | Auction';
    };

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        title: getTitle('Home'),
        controller: 'HomeController',
        controllerAs: 'ctrl'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        title: getTitle('Search'),
        controller: 'SearchController',
        controllerAs: 'ctrl'
      })
      .when('/product/:productId', {
        templateUrl: 'views/product.html',
        title: getTitle('Product'),
        controller: 'ProductDetailsController',
        controllerAs: 'ctrl',
        resolve: {
          product: ['ProductService', '$route', function(ProductService, $route){
            return ProductService.findProduct($route.current.params.productId);
        }]}
      })
      .otherwise({
        redirectTo: '/'
      });
  }]).run(['$rootScope', function($rootScope){
    $rootScope.$on('$routeChangeSuccess', function(event, newRoute){
      $rootScope.title = newRoute.$$route.title;
      $rootScope.$emit('cleanErrors');
    });

  }]);
}());
