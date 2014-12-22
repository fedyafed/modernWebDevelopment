'use strict';
(function () {
  var ProductDetailsController = function(product) {
    this.product = product;
  };

  ProductDetailsController.$inject = ['product'];
  angular.module('auction').controller('ProductDetailsController', ProductDetailsController);
}());
