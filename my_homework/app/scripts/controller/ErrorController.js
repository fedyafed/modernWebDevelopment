"use strict";
(function () {
  angular.module("auction").controller("ErrorController", ["$on", function($on){
    this.errors = [];

    $on('error', function(){
      console.log(arguments);
    })
  }]);

}());
