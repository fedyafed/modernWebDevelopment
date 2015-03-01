'use strict';
(function () {
  angular.module('auction').directive('datePicker', function () {
    return {
      restrict: 'E',
      scope: {
        date: '=',
        fromDate: '@',
        toDate: '@'
      },
      templateUrl: 'views/directive/DatePickerDirective.html',
      link: function (scope, element) {
        var fromDate = scope.fromDate || '';
        var toDate = scope.toDate || '';

        scope.datePicker = angular.element(element).find('input');
        scope.datePicker.datepicker({
          clearBtn: true,
          startDate: fromDate,
          endDate: toDate
        });

        scope.$watch('_date', function (date) {
          var newDate = '';
          if (date) {
            newDate = moment(date, 'MM/DD/YYYY').format('YYYY-MM-DD');
          }
          if (newDate !== scope.date) {
            scope.date = newDate;
          }
        });

        scope.$watch('date', function (date) {
          var newDate = '';
          if (date) {
            newDate = moment(date, 'YYYY-MM-DD').format('MM/DD/YYYY');
          }
          if (newDate !== scope._date) {
            scope._date = newDate;
          }
        });
      },
      controller: ['$scope', function ($scope) {
        $scope.showDatePicker = function () {
          $scope.datePicker.datepicker('show');
        };
      }]
    };
  });
}());
