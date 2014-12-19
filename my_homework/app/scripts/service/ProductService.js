"use strict";
(function () {
  angular.module("auction").service("ProductService", ['$http', "$q", function($http, $q){
    this.listProducts = function(){
      return $http.get("data/products-featured.json")
        .then(function(response) {
          return response.data;
        }, function(){
          return null;
        });
    };

    this.searchProducts = function(){
      return $http.get("data/products-search.json")
        .then(function(response) {
          return response.data;
        }, function(){
          return null;
        });
    };

    this.findProduct = function(productId, page){
      var from = page || "home";
      var productPromise = $q.defer();
      var source;
      var product = null;
      switch (from) {
        case "home":
              source =this.listProducts();
              break;
        case "search":
              source = this.searchProducts();
      }
      source.then(function(products){
         product = _.find(products, {id: parseInt(productId)});
        if (product) {
          productPromise.resolve(product);
        } else {
          productPromise.reject();
        }
      });

      return productPromise;
    };
  }])
}());
