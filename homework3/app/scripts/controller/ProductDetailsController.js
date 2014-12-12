/**
 * Created by fedya on 11.12.14.
 */
(function(){
    "use strict";

    var productDetailsController = function(product) {
        this.product = product;
        console.log(product);
    };

    productDetailsController.$inject = ["product"];
    angular.module("auction").controller("ProductDetailsController", productDetailsController);
}());