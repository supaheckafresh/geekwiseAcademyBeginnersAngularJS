"use strict";

(function (angular) {
	angular
		.module("application")
		.component("modalPrompt", {
			require: {
				modal: "^homemadeModal"
			},
			templateUrl  : "www/app/components/homemadeModal/modalPrompt/modalPrompt.htm",
			controller   : "modalPromptController",
			controllerAs : "vm"
		});
} (window.angular));