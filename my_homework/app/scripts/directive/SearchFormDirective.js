'use strict';
(function () {
  angular.module('auction').directive('searchForm', function () {
    return {
      restrict: 'E',
      scope: true,
      templateUrl: 'views/directive/SearchFormDirective.html',
      controller: ['SearchService', '$scope', function (SearchService, $scope) {
        this.search = SearchService.getSearch();
        this.priceRange = SearchService.getPriceRange();

        $scope.$on('ProductSearchUpdate', function () {
          this.search = SearchService.getSearch();
        }.bind(this));

        this.find = function () {
          SearchService.setSearch(this.search);
        };
      }],
      controllerAs: 'ctrl'
    };
  });
}());
