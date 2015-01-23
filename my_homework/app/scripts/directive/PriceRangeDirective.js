'use strict';
(function () {
  angular.module('auction').directive('priceRange', function(){
    return {
      restrict: 'E',
      scope: {
        min: '@',
        max: '@',
        step: '@',
        low: '=',
        high: '='
      },
      templateUrl: 'views/directive/PriceRangeDirective.html',
      link: function(scope, element){
        var sliderElement = angular.element(element).find('input[type="text"]');
        var min = parseInt(scope.min) || 0;
        var max = parseInt(scope.max) || 100;
        var step = parseInt(scope.step) || (max - min) / 100;
        scope.Min = min;
        scope.Max = max;
        scope.Step = step;

        scope.low = parseInt(scope.low) || min;
        scope.high = parseInt(scope.high) || max;

        var slider = sliderElement.slider({
          min: min,
          max: max,
          step: step,
          value: [scope.low, scope.high],
          tooltip: 'hide',
          handle: 'triangle'
        });

        slider.on('slideStop', function(event){
          if (event.value[0] !== scope.low){
            scope.$apply(scope.low = event.value[0]);
          }
          if (event.value[1] !== scope.high){
            scope.$apply(scope.high = event.value[1]);
          }
        });

        scope.$watch('low', function(val){
          var value = parseInt(val);
          if (isNaN(value) || value < scope.Min) {
            value = scope.Min;
          }
          if (value > scope.high) {
            value = scope.high;
          }
            scope.low = value;
            slider.slider('setValue', [scope.low, scope.high]);
        });

        scope.$watch('high', function(val){
          var value = parseInt(val);
          if (value < scope.low) {
            value = scope.low;
          }
          if (isNaN(value) || value > scope.Max) {
            value = scope.Max;
          }
          if (scope.high !== value) {
            scope.high = value;
          }
            slider.slider('setValue', [scope.low, scope.high]);
        });
      }
    };
  });
}());
