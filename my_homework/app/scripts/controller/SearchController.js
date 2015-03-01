'use strict';
(function () {
  var SearchController = function (ProductService, $scope) {
    this.ProductService = ProductService;
    this.$scope = $scope;
    this.products = [];

    $scope.$on('ProductSearchUpdate', function () {
      this.refreshPage();
    }.bind(this));

    this.refreshPage();
  };

  SearchController.prototype = {
    refreshPage: function () {
      this.ProductService.searchProducts().then(function (data) {
        this.products = data;
        if (!data || data.length === 0) {
          this.$scope.$emit('error', ['Products not found']);
        }
      }.bind(this), function () {
        this.$scope.$emit('error', ['Can not load products']);
      }.bind(this));
    }
  };

  SearchController.$inject = ['ProductService', '$scope'];

  angular.module('auction').controller('SearchController', SearchController);
}());
