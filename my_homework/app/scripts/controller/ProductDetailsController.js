'use strict';
(function () {
  var ProductDetailsController = function(product) {
    this.product = product;
    this.isSearchFormVisible = false;
  };

  ProductDetailsController.$inject = ['product'];
  angular.module('auction').controller('ProductDetailsController', ProductDetailsController);
}());
