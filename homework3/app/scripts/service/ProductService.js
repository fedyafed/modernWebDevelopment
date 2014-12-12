(function () {
  'use strict';

  var ProductService = function ($http, $q) {
    // Instance attributes go here:
    this.$http = $http;
    this.$q = $q;
  };

  /** List all dependencies required by the service. */
  ProductService.$inject = ['$http', '$q'];

  // Instance methods go here:
  ProductService.prototype = {

    /** Returns the list of all available products on the server. */
    getProducts: function () {
      return this.$http.get('/data/products-featured.json')
          .then(function (resp) { return resp.data; });
    },

    /** Finds products with specified criteria.
      * NOTE: Search criteria are not implemented yet.
      */
    find: function () {
      return this.$http.get('/data/products-search.json')
          .then(function (resp) { return resp.data; });
    },

    getProductById: function(productId) {
      var productPromise = this.$q.defer();

      this.getProducts().then(function(products) {
        var product = _.find(products, {'id': parseInt(productId)});
        if (product) {
          productPromise.resolve(product)
        } else {
          productPromise.reject("Product not found.");
        }
      });

      return productPromise.promise;
    }
  };

  // Register the service within AngularJS DI container.
  angular.module('auction').service('ProductService', ProductService);
}());
