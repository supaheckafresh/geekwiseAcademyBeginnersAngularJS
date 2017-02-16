"use strict";

(function(angular) {
	angular
		.module("application")
		.component("homemadeModal", {
			templateUrl  : "components/homemadeModal/modal.htm",
			controller   : "modalController",
			controllerAs : "vm",
			transclude   : true
		});
}(window.angular));