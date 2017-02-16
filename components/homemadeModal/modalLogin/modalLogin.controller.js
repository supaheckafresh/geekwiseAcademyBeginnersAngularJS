"use strict";

(function(angular) {
	angular
		.module("application")
		.controller("modalLoginController", ["$scope", "loginService", function ($scope, loginService) {
			this.$onInit = function() {
				// error handler for promises below
				this._processError = error => {
					this.error = error;
					$scope.$apply();  // we use $scope.apply to trigger Angular binding updates since loginService doesn't use $q
					                  // to perform the same action
				};

				// success handler for promises below
				this._processSuccess = () => {
					this.closeModal();
					$scope.$apply();  // we use $scope.apply to trigger Angular binding updates since loginService doesn't use $q
					                  // to perform the same action
				};

				// our actual login work, brought to us by the hard workin' loginService
				this.login = (userParam, passwordParam) => {
					return loginService.login(userParam, passwordParam)
						.then(this._processSuccess)
						.catch(this._processError);
				};

				this.gitLogin = () => {
					return loginService.gitLogin()
						.then(this._processSuccess)
						.catch(this._processError);
				};

				// call our parent's close modal routine in addition to clearing the login form
				this.closeModal = () => {
					// hide modal immediately
					this.modal.close();

					// clear these thereafter
					this.loginform.controls = { };
					this.loginform.$setPristine();
					this.error = null;
				};
			}
		}]);
}(window.angular));