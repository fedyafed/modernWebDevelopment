'use strict';
(function(){
  angular.module('auction').directive('searchForm', function(){
    return {
      restrict: 'E',
      templateUrl: 'views/directive/SearchFormDirective.html'

    }
  })
}());
