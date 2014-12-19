"use strict";
(function () {
  angular.module("auction").directive("auctionNavbar", function(){
    return {
      restrict: "E",
      templateUrl: "/views/directive/Navbar.html"
    }
  })
}());
