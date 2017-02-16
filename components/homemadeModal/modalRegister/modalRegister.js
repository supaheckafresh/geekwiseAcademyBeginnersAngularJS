"use strict";

(function (angular) {
	angular
		.module("application")
		.component("modalRegister", {
			require: {
				modal: "^homemadeModal"
			},
			templateUrl  : "components/homemadeModal/modalRegister/modalRegister.htm",
			controller   : "modalRegisterController",
			controllerAs : "vm"
		});
} (window.angular));