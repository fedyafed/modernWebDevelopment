'use strict';
(function () {
  angular.module('auction').directive('pairSlider', function(){
    return {
      restrict: 'E',
      scope: {
        min: '@',
        max: '@',
        low: '=',
        high: '='
      },
      templateUrl: 'views/directive/PairSliderDirective.html',
      link: function(scope, element){
        var sliderElement = angular.element(element).find('input[type="text"]');
        var min = parseInt(scope.min) || 0;
        var max = parseInt(scope.max) || 100;

        scope.low = parseInt(scope.low) || min;
        scope.high = parseInt(scope.high) || max;

        var slider = sliderElement.slider({
          min: min,
          max: max,
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

        scope.$watch(function(scope) {
          return [
            scope.low,
            scope.high
          ];
        }, function(newValue){
          slider.slider('setValue', newValue);
        }, true);
      }
    };
  });
}());
