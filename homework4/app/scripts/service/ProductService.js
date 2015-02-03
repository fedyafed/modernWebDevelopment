'use strict';
(function () {
  var ProductService = function(Restangular, SearchService) {
    this.listProducts = function () {
      return Restangular.all('products').getList();
    };

    this.searchProducts = function () {
      return Restangular.all('products').getList(
        SearchService.getCleanSearch()
      );
    };

    this.getProductById = function (productId) {
      return Restangular.one('products', productId).get();
    };
  };

  ProductService.$inject = ['Restangular', 'SearchService'];
  angular.module('auction').service('ProductService', ProductService);
}());
