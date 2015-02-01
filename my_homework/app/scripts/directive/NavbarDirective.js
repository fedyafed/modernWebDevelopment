'use strict';
(function () {
  angular.module('auction').directive('auctionNavbar', function(){
    return {
      scope: true,
      restrict: 'E',
      templateUrl: 'views/directive/Navbar.html',
      controller: ['SearchService', function(SearchService) {
        this.find = function() {
          var search = {
            name: this.name
          };
          SearchService.updateSearch(search);
        };
      }],
      controllerAs: 'ctrl'
    };
  });
}());
