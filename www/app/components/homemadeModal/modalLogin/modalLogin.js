"use strict";

(function(angular) {
	angular
		.module("application")
		.component("modalLogin", {
			require: {
				modal: "^homemadeModal"
			},
			templateUrl  : "www/app/components/homemadeModal/modalLogin/modalLogin.htm",
			controller   : "modalLoginController",
			controllerAs : "vm"
		});
} (window.angular));