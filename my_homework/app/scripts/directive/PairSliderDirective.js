"use strict";
(function () {
  angular.module('auction').directive('pairSlider', function(){
    return {
      restrict: 'E',
      scope: {
        min: "@",
        max: "@",
        low: "=",
        high: "="
      },
      templateUrl: 'views/directive/PairSliderDirective.html',
      link: function(scope, element, attrs){
        var min = scope.min || 0;
        var max = scope.max || 100;

        var low = parseInt(scope.low) || min;
        var high = parseInt(scope.high) || max;

        $(element).slider({
          min: min,
          max: max,
          value: [low, high],
          tooltip: "hide",
          handle: "triangle"
        });


      }
    }
  });
}());
