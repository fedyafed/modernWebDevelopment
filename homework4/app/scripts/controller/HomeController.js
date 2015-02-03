'use strict';
(function () {
  var HomeController = function(ProductService, $rootScope){
    this.ProductService = ProductService;
    this.$rootScope = $rootScope;
    this.products = [];

    ProductService.listProducts().then(function(data){
      this.products = data;
    }.bind(this), function() {
      this.$rootScope.$emit('error', ['Can not load products']);
    }.bind(this));
  };

  HomeController.$inject = ['ProductService', '$rootScope'];
  angular.module('auction').controller('HomeController', HomeController);
}());
