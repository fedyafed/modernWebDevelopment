'use strict';
(function () {
  angular.module('auction').directive('showError', function(){
    return {
      restrict: 'E',
      templateUrl: 'views/directive/ShowError.html',
      link: function(scope){
        scope.errors = [];
        scope.$on('error', function(event, errors){
          errors.forEach(function(error){
            if (scope.errors.indexOf(error) < 0) {
              scope.errors.push(error);
            }
          });
        });
      },
      controller: ['$scope', function($scope){
        $scope.closeError = function(index){
          $scope.errors.splice(index, 1);
        };
      }]
    };
  });

}());
