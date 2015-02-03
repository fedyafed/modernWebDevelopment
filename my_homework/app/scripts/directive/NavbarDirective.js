'use strict';
(function () {
  angular.module('auction').directive('auctionNavbar', function(){
    return {
      scope: {},
      restrict: 'E',
      templateUrl: 'views/directive/Navbar.html',
      controller: ['SearchService', function(SearchService) {
        this.find = function() {
          var search = SearchService.getSearch();
          search.name = this.searchName;
          SearchService.showSearch(search);
          this.searchName = '';
        };
      }],
      controllerAs: 'ctrl'
    };
  });
}());
