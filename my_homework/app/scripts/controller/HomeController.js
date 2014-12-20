'use strict';
(function () {
  angular.module('auction').controller('HomeController', ['ProductService',  function(ProductService) {

    var _this = this;
    ProductService.listProducts().then(function(data){
      console.log(data);
      _this.products = data;
    });
    //$scope.$emit('error', ['error1']);
    //$scope.$emit('error', ['error2']);
  }]);
}());
