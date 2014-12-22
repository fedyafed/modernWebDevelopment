'use strict';
(function () {
  var ProductDetailsController = function(product) {
    this.product = product;
    this.searchPanelShow = false;
  };

  ProductDetailsController.$inject = ['product'];
  angular.module('auction').controller('ProductDetailsController', ProductDetailsController);
}());
