'use strict';
(function () {
  var SearchService = function($location) {
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
      console.log('search update');
      this.search = $location.search();
      if (this.search.closeDate) {
        this.search.closeDate = this.search.closeDate.replace(new RegExp('-', 'g'), '/');
      }
      if (this.search.bidNum) {
        this.search.bidNum = parseInt(this.search.bidNum);
      }
    }.bind(this);

    //$rootScope.$on('$routeUpdate', this.urlToSearch);

    this.updateSearch = function (searchParams) {
      var newSearch = {};
      for (var i in searchParams) {
        if (searchParams.hasOwnProperty(i) && searchParams[i] !== this.SEARCH_DEFAULTS[i] && typeof searchParams[i] !== 'undefined') {
          newSearch[i] = searchParams[i];
        }
      }
      //this.search = JSON.parse(JSON.stringify(newSearch));
      if (newSearch.closeDate) {
        newSearch.closeDate = newSearch.closeDate.replace(new RegExp('/', 'g'), '-');
      }

      if ($location.path() !== '/search') {
        $location.path('search');
      }
      $location.search(newSearch);
    };

    this.getSearch = function () {
      console.log('get search');
      if ($location.path() === '/search') {

        this.urlToSearch();
      }
      return JSON.parse(JSON.stringify(this.search));
    };

    this.getPriceRange = function () {
      return [this.SEARCH_DEFAULTS.lowPrice, this.SEARCH_DEFAULTS.highPrice];
    };
  };

  SearchService.$inject = ['$location'];
  angular.module('auction').service('SearchService', SearchService);
}());

