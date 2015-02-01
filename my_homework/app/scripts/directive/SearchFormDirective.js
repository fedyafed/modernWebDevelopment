'use strict';
(function(){
  angular.module('auction').directive('searchForm', function(){
    return {
      restrict: 'E',
      scope: true,
      templateUrl: 'views/directive/SearchFormDirective.html',
      controller: ['SearchService', '$scope', function(SearchService, $scope){
        this.search = SearchService.getSearch();
        this.priceRange = SearchService.getPriceRange();

        this.find = function() {
          SearchService.updateSearch(this.search);
        };
      }],
      controllerAs: 'ctrl'
    };
  });
}());
