'use strict';
(function () {
  var HomeController = function (ProductService, $scope) {
    this.products = [];

    ProductService.listProducts().then(function (data) {
      this.products = data;
    }.bind(this), function () {
      $scope.$emit('error', ['Can not load products']);
    }.bind(this));
  };

  HomeController.$inject = ['ProductService', '$scope'];

  angular.module('auction').controller('HomeController', HomeController);
}());
