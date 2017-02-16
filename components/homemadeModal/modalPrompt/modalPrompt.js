"use strict";

(function (angular) {
	angular
		.module("application")
		.component("modalPrompt", {
			require: {
				modal: "^homemadeModal"
			},
			templateUrl  : "components/homemadeModal/modalPrompt/modalPrompt.htm",
			controller   : "modalPromptController",
			controllerAs : "vm"
		});
} (window.angular));