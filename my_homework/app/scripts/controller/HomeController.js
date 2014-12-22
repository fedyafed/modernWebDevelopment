'use strict';
(function () {
  var HomeController = function(ProductService){
    var _this = this;
    _this.products = [];
    ProductService.listProducts().then(function(data){
      _this.products = data;
    });
  };

  HomeController.prototype = {};

  HomeController.$inject = ['ProductService'];

  angular.module('auction').controller('HomeController', HomeController);
}());
