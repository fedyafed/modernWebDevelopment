'use strict';
(function () {
  var SearchController = function(ProductService){
    var _this = this;
    _this.products = [];
    ProductService.searchProducts().then(function(data){
      _this.products = data;
    });
  };

  SearchController.$inject = ['ProductService'];
  angular.module('auction').controller('SearchController', SearchController);
}());
