'use strict';
(function(){
  angular.module('auction').directive('datePicker', function(){
    return {
      restrict: 'E',
      scope: {
        date: '=',
        fromDate: '@',
        toDate: '@'
      },
      templateUrl: 'views/directive/DatePickerDirective.html',
      link: function(scope, element){
        var fromDate = scope.fromDate || '';
        var toDate = scope.toDate || '';
        scope.datePicker = angular.element(element).find('input');

        scope.datePicker.datepicker({
          format: 'mm/dd/yyyy',
          startDate: fromDate,
          endDate: toDate
        });
      },
      controller: ['$scope', function($scope){
        $scope.showDatePicker = function(){
          $scope.datePicker.datepicker('show');
        };
      }]
    };
  });
}());
