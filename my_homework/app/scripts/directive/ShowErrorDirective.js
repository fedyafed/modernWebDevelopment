'use strict';
(function () {
  angular.module('auction').directive('showError', function () {
    return {
      scope: true,
      restrict: 'E',
      templateUrl: 'views/directive/ShowError.html',
      controller: ['$rootScope', function ($rootScope) {
        this.errors = [];
        this.closeError = function (index) {
          this.errors.splice(index, 1);
        };
        $rootScope.$on('error', function (event, errors) {
          var that = this;
          errors.forEach(function (error) {
            if (that.errors.indexOf(error) < 0) {
              that.errors.push(error);
            }
          });
        }.bind(this));
        $rootScope.$on('cleanErrors', function () {
          this.errors = [];
        }.bind(this));
      }],
      controllerAs: 'ctrl'
    };
  });

}());
