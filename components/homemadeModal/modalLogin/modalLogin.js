"use strict";

(function(angular) {
	angular
		.module("application")
		.component("modalLogin", {
			require: {
				modal: "^homemadeModal"
			},
			templateUrl  : "components/homemadeModal/modalLogin/modalLogin.htm",
			controller   : "modalLoginController",
			controllerAs : "vm"
		});
} (window.angular));