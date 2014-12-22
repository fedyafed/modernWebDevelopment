'use strict';
(function () {
  angular.module('auction').directive('showError', function(){
    return {
      scope: true,
      restrict: 'E',
      templateUrl: 'views/directive/ShowError.html',
      controller: ['$rootScope', '$scope', function($rootScope, $scope){
        $scope.errors = [];
        $scope.closeError = function(index){
          $scope.errors.splice(index, 1);
        };
        $rootScope.$on('error', function(event, errors){
          errors.forEach(function(error){
            if ($scope.errors.indexOf(error) < 0) {
              $scope.errors.push(error);
            }
          });
        });
        $rootScope.$on('cleanErrors', function(){
          $scope.errors = [];
        });
      }]
    };
  });

}());
