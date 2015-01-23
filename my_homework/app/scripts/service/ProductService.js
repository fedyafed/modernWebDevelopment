'use strict';
(function () {
  var ProductService = function(Restangular){
    this.Restangular = Restangular;
    this.search = {};
  };

  ProductService.prototype = {
    listProducts: function() {
      return this.Restangular.all('products').getList();
    },

    searchProducts: function(params){
      return this.Restangular.all('products').getList(params);
    },

    getProductById: function(productId){
      return this.Restangular.one('products', productId).get();
    },

    getSearch: function(){
      return this.search;
    }
  };

  ProductService.$inject = ['Restangular'];
  angular.module('auction').service('ProductService', ProductService);
}());
