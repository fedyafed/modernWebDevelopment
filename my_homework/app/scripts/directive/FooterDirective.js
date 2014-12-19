'use strict';
(function () {
  angular.module('auction').directive('auctionFooter', function(){
    return {
      restrict: 'E',
      templateUrl: '/views/directive/Footer.html'
    };
  });
}());
