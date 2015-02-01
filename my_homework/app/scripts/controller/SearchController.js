'use strict';
(function () {
  var SearchController = function(ProductService, $rootScope){
    this.ProductService = ProductService;
    this.$rootScope = $rootScope;
    this.products = [];
    $rootScope.$on('$routeUpdate', function(){
      console.log('route update');
      this.refreshPage();
    }.bind(this));
    this.refreshPage();
  };

  SearchController.prototype = {
    refreshPage: function() {
      this.ProductService.searchProducts().then(function (data) {
        this.products = data;
      }.bind(this), function () {
        this.$rootScope.$emit('error', ['Can not load products']);
      }.bind(this));
    }
  };

  SearchController.$inject = ['ProductService', '$rootScope'];
  angular.module('auction').controller('SearchController', SearchController);
}());
