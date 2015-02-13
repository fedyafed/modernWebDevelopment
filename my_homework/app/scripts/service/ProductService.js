'use strict';
(function () {
  var ProductService = function(Restangular, SearchService) {
    this.Restangular = Restangular;
    this.SearchService = SearchService;
  };

  ProductService.prototype = {
    listProducts: function () {
      return this.Restangular.all('products').getList();
    },

    searchProducts: function () {
      return this.Restangular.all('products').getList(
        this.SearchService.getCleanSearch()
      );
    },

    getProductById: function (productId) {
      return this.Restangular.one('products', productId).get();
    }
  };

  angular.module('auction').service('ProductService', ProductService);
}());
