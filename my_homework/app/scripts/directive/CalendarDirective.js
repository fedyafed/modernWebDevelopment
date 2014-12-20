'use strict';
(function(){
  angular.module('auction').directive('dateCalendar', function(){
    return {
      restrict: 'E',
      scope: {
        date: "@",
        fromDate: "=",
        toDate: "="
      },
      templateUrl: 'views/directive/CalendarDirective.html',
      link: function(scope, element){
        var fromDate = scope.fromDate || "";
        var toDate = scope.toDate || "";
        var calendar = angular.element(element).find('input');
        calendar.datepicker({
            format: 'mm/dd/yyyy',
            startDate: fromDate,
            endDate: toDate
          });
      }
    };
  });
}());
