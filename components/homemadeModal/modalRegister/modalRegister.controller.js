"use strict";

(function (angular) {
	angular
		.module("application")
		.controller("modalRegisterController", ["$scope", "registerService", function($scope, registerService) {
			this.$onInit = function() {
				this._processError = error => {
					this.error = error;
					// trigger digest since Firebase promise won't
					$scope.$apply();
				};

				this._processSuccess = results => {
					this.closeModal();
					// trigger digest since Firebase promise won't
					$scope.$apply();
				};

				// our actual register work, brought to us by the hard workin' registerService
				this.register = (registerFormData, password) => {
					return registerService.register(registerFormData, password)
						.then(this._processSuccess)
						.catch(this._processError);
				};

				this.closeModal = () => {
					// hide modal immediately
					this.modal.close();

					// clear these thereafter
					this.registerform.controls = { };
					this.registerform.$setPristine();
					this.error = null;
				};
			}
		}]);
}(window.angular));