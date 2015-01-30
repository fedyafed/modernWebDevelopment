'use strict';
(function () {
  var ProductService = function(Restangular, $location){
    this.Restangular = Restangular;
    this.$location = $location;
    this.searchDefaults = {
      lowPrice: 0,
      highPrice: 500,
      name: '',
      category: '',
      closeDate: '',
      bidNum: null
    };
    this.search = $location.search();
    if (this.search.closeDate) {
      this.search.closeDate = this.search.closeDate.replace(new RegExp('-', 'g'), '/');
    }
    if (this.search.bidNum) {
      this.search.bidNum = parseInt(this.search.bidNum);
    }
  };

  ProductService.prototype = {
    listProducts: function() {
      return this.Restangular.all('products').getList();
    },

    searchProducts: function(){
      return this.Restangular.all('products').getList(this.search);
    },

    getProductById: function(productId){
      return this.Restangular.one('products', productId).get();
    },

    updateSearch: function(searchParams) {
      var newSearch = {};
      for (var i in searchParams) {
        if (searchParams.hasOwnProperty(i) && searchParams[i] !== this.searchDefaults[i] && typeof searchParams[i] !== 'undefined') {
          newSearch[i] = searchParams[i];
        }
      }
      this.search = JSON.parse(JSON.stringify(newSearch));
      if (newSearch.closeDate) {
        newSearch.closeDate = newSearch.closeDate.replace(new RegExp('/', 'g'), '-');
      }
      this.$location.search(newSearch);
      if (this.$location.path() !== '/search') {
        this.$location.path('search');
      } else {
        //this.searchProducts();
      }

    },

    getSearch: function(){
      return JSON.parse(JSON.stringify(this.search));
    },

    getPriceRange: function(){
      return [this.searchDefaults.lowPrice, this.searchDefaults.highPrice];
    }
  };

  ProductService.$inject = ['Restangular', '$location'];
  angular.module('auction').service('ProductService', ProductService);
}());
