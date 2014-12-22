'use strict';
(function () {
  angular.module('auction').service('ProductService', ['$http', '$q', '$rootScope', function($http, $q, $rootScope){
    this.listProducts = function(){
      return $http.get('data/products-featured.json')
        .then(function(response) {
          return response.data;
        }, function(){
          $rootScope.$emit('error', ['Products not found.']);
          return null;
        });
    };

    this.searchProducts = function(){
      return $http.get('data/products-search.json')
        .then(function(response) {
          return response.data;
        }, function(){
          $rootScope.$emit('error', ['Searched products not found.']);
          return null;
        });
    };

    this.findProduct = function(productId, page){
      var from = page || 'home';
      var productPromise = $q.defer();
      var source;
      var product = null;
      switch (from) {
        case 'home':
              source =this.listProducts();
              break;
        case 'search':
              source = this.searchProducts();
      }
      source.then(function(products){
         product = _.find(products, {id: parseInt(productId)});
        if (product) {
          productPromise.resolve(product);
        } else {
          $rootScope.$emit('error', ['Requested product not found.']);
          productPromise.reject();
        }
      });

      return productPromise.promise;
    };
  }]);
}());
