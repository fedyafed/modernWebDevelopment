'use strict';
(function () {
  angular.module('auction').directive('auctionFooter', function(){
    return {
      scope: false,
      restrict: 'E',
      templateUrl: '/views/directive/Footer.html'
    };
  });
}());
