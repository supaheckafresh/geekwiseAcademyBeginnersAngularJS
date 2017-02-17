"use strict";

(function(angular) {
	angular
		.module("application")
		.controller("modalController", ["modalService", function (modalService) {
			this.$onInit = function() {
				// function reference to closing the modal
				this.close = modalService.close;

				// bind to our modal configuration in modalService
				this.modal = modalService.modal;

				// a combination of properties to determine whether or not we should be showing
				// the modal; wrap in a function so your binding re-evaluates when Angular's bindings
				// refresh themselves; assigning to a literal will always be the same and won't
				// re-evaluate
				this.isShowingModal = function () {
					return modalService.modal.isLogin || modalService.modal.isRegister || modalService.modal.isPrompt;
				};
			}
		}]);
}(window.angular));