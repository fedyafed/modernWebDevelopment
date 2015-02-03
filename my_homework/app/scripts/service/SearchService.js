'use strict';
(function () {
  var SearchService = function($location, $rootScope) {
    this.SEARCH_DEFAULTS = {
      lowPrice: 0,
      highPrice: 500,
      name: '',
      category: '',
      closeDate: '',
      bidNum: null
    };
    this.search = {};

    this.urlToSearch = function() {
      if ($location.path() !== '/search') {
        return;
      }
      var newSearch = $location.search();
      for (var i in this.SEARCH_DEFAULTS) {
        if (this.SEARCH_DEFAULTS.hasOwnProperty(i)) {
          if (typeof (newSearch[i]) === 'undefined') {
            this.search[i] = this.SEARCH_DEFAULTS[i];
          } else {
            this.search[i] = newSearch[i];
          }
        }
      }
      if (this.search.closeDate) {
        this.search.closeDate = this.search.closeDate.replace(new RegExp('-', 'g'), '/');
      }
      if (this.search.bidNum) {
        this.search.bidNum = parseInt(this.search.bidNum);
      }
      if (this.search.lowPrice) {
        this.search.lowPrice = parseInt(this.search.lowPrice);
      }
      if (this.search.highPrice) {
        this.search.highPrice = parseInt(this.search.highPrice);
      }
    }.bind(this);

    this.urlToSearch();
    $rootScope.$on('$routeUpdate', this.urlToSearch);
    $rootScope.$on('$routeChangeStart', this.urlToSearch);

    this.getCleanSearch = function() {
      var cleanSearch = {};
      for (var i in this.search) {
        if (this.search.hasOwnProperty(i) && this.search[i] !== this.SEARCH_DEFAULTS[i] && typeof this.search[i] !== 'undefined') {
          cleanSearch[i] = this.search[i];
        }
      }
      if (cleanSearch.closeDate) {
        cleanSearch.closeDate = cleanSearch.closeDate.replace(new RegExp('/', 'g'), '-');
      }
      return cleanSearch;
    };

    this.showSearch = function (search) {
      this.search = search;
      if ($location.path() !== '/search') {
        $location.path('search');
      }
      $location.search(this.getCleanSearch());
    };

    this.getSearch = function () {
      return this.search;
    };

    this.getPriceRange = function () {
      return [this.SEARCH_DEFAULTS.lowPrice, this.SEARCH_DEFAULTS.highPrice];
    };
  };

  SearchService.$inject = ['$location', '$rootScope'];
  angular.module('auction').service('SearchService', SearchService);
}());

