'use strict';
(function () {
  var SearchService = function ($rootScope) {
    this.$rootScope = $rootScope;
    this.SEARCH_DEFAULTS = {
      lowPrice: 0,
      highPrice: 500,
      name: '',
      category: '',
      closeDate: '',
      bidNum: 0
    };
    this.search = {};
  };

  SearchService.prototype = {
    setSearch: function (newSearch) {
      this.search = _.defaults(
        _.cloneDeep(newSearch),
        this.SEARCH_DEFAULTS
      );
      this.$rootScope.$broadcast('ProductSearchUpdate');
    },

    getSearch: function () {
      return _.cloneDeep(this.search);
    },

    getUrlSearch: function () {
      var that = this;
      return _.omit(this.search, function (value, key) {
        return _.isUndefined(value) ||
          _.isNull(value) ||
          _.isString(value) && value.trim().length === 0 ||
          value === that.SEARCH_DEFAULTS[key];
      });
    },

    getPriceRange: function () {
      return [this.SEARCH_DEFAULTS.lowPrice, this.SEARCH_DEFAULTS.highPrice];
    }
  };

  SearchService.$inject = ['$rootScope'];

  angular.module('auction').service('SearchService', SearchService);
}());

