'use strict';
(function () {
  var HomeController = function(ProductService, $rootScope){
    this.ProductService = ProductService;
    this.$rootScope = $rootScope;
    this.products = [];

    var _this = this;
    ProductService.listProducts().then(function(data){
      _this.products = data;
    }, function() {
      _this.$rootScope.$emit('error', ['Can not load products']);
    });
  };

  HomeController.$inject = ['ProductService', '$rootScope'];
  angular.module('auction').controller('HomeController', HomeController);
}());
