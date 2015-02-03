'use strict';
(function () {
  var ProductDetailsController = function(product, $rootScope) {
    this.product = product;
    this.isSearchFormVisible = false;
    if (!product) {
      $rootScope.$emit('error', ['Product not found']);
      this.isSearchFormVisible = true;
    }
  };

  ProductDetailsController.$inject = ['product', '$rootScope'];
  angular.module('auction').controller('ProductDetailsController', ProductDetailsController);
}());
