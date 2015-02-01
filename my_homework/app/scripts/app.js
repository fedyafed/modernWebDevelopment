'use strict';
(function(){
angular
  .module('auction', [
    'ngRoute',
    'restangular',
    'auction.templates'
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
        reloadOnSearch: false,
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
            return ProductService.getProductById(parseInt($route.current.params.productId))
              .then(function (product) {
                return product;
              }, function () {
                return null;
              });
        }]}
      })
      .otherwise({
        redirectTo: '/'
      });
  }]).config(['RestangularProvider', function(RestAngularProvider){
    RestAngularProvider.setBaseUrl('data');
    //RestAngularProvider.setBaseUrl('//private-d315d-webauction.apiary-mock.com');
    RestAngularProvider.setRequestSuffix('.json');
  }]).run(['$rootScope', function($rootScope){
    $rootScope.$on('$routeChangeSuccess', function(event, newRoute){
      $rootScope.title = newRoute.$$route.title;
      $rootScope.$emit('cleanErrors');
    });

  }]);
}());
