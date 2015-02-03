'use strict';
(function () {
  var SearchController = function(ProductService, $rootScope, $scope){
    this.ProductService = ProductService;
    this.$rootScope = $rootScope;
    this.products = [];

    this.refreshPage = function() {
      this.ProductService.searchProducts().then(function (data) {
        this.products = data;
        if (!data || data.length === 0) {
          this.$rootScope.$emit('error', ['Products not found']);
        }
      }.bind(this), function () {
        this.$rootScope.$emit('error', ['Can not load products']);
      }.bind(this));
    };

    var routeUpdateUnsubscribe = $rootScope.$on('$routeUpdate', function(){
      this.refreshPage();
    }.bind(this));
    $scope.$on('$destroy', function(){
      routeUpdateUnsubscribe();
    });
    this.refreshPage();
  };

  SearchController.$inject = ['ProductService', '$rootScope', '$scope'];
  angular.module('auction').controller('SearchController', SearchController);
}());
