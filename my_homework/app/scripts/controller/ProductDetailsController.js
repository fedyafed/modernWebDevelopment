'use strict';
(function () {
  var ProductDetailsController = function (product, $scope) {
    this.product = product;
    this.isSearchFormVisible = false;
    if (!product) {
      $scope.$emit('error', ['Product not found']);
      this.isSearchFormVisible = true;
    }
  };

  ProductDetailsController.$inject = ['product', '$scope'];

  angular.module('auction').controller('ProductDetailsController', ProductDetailsController);
}());
