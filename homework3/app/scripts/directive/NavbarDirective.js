'use strict';
(function () {
  angular.module('auction').directive('auctionNavbar', function(){
    return {
      scope: false,
      restrict: 'E',
      templateUrl: 'views/directive/Navbar.html'
    };
  });
}());
