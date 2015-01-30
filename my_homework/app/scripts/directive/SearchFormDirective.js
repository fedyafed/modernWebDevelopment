'use strict';
(function(){
  angular.module('auction').directive('searchForm', function(){
    return {
      restrict: 'E',
      scope: true,
      templateUrl: 'views/directive/SearchFormDirective.html',
      controller: ['ProductService', function(ProductService){
        this.newSearch = ProductService.getSearch();
        this.priceRange = ProductService.getPriceRange();
        //this.newSearch = {};

        this.search = function() {
          ProductService.updateSearch(this.newSearch);
        };
      }],
      controllerAs: 'ctrl'
    };
  });
}());
