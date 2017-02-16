"use strict";

(function(angular) {
	angular
		.module("application")
		.controller("modalPromptController", function() {
			this.$onInit = function() {
				// create properties from our parent modal component's (require) properties so we can
				// conveniently bind them in our modal's view

				// this is a function reference that we bind to
				this.close = this.modal.close;

				// this is a configuration object we bind to
				this.modal = this.modal.modal;
			};
		});
} (window.angular));
