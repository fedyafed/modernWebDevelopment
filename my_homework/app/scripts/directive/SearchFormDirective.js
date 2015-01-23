'use strict';
(function(){
  angular.module('auction').directive('searchForm', function(){
    return {
      restrict: 'E',
      templateUrl: 'views/directive/SearchFormDirective.html',
      controller: ['ProductService', function(ProductService){
        this.search = ProductService.getSearch();
      }],
      controllerAs: 'ctrl'
    };
  });
}());
