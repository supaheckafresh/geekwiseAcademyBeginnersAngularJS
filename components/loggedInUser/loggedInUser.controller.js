"use strict";

(function(angular) {
	angular
		.module("application")
		.controller("loggedInUserController",
			["settings", "modalService", "loginService",
			function(settings, modalService, loginService) {

			this.$onInit = function() {
				this.applicationLabel = settings.title + " v." + settings.version;

				// login service bindings
				this.fetchLoggedInUser = loginService.fetchLoggedInUser;
				this.fetchIsLoginBusy = loginService.fetchIsLoginBusy;
				this.logout = loginService.logout;

				// modal service bindings
				this.showLogin = modalService.showLogin;
				this.showRegister = modalService.showRegister;

				// a custom function we'll make right here so we can bind
				// a prompting to the logout button so the user may click
				// it and answer a question before losing their session
				this.logoutPrompt = function() {
					modalService.showPrompt(
						"Are you sure you want to log out?",
						{ text: "NO, PLEASE DON'T" },
						{ text: "DO IT!  DO IT!", callback: this.logout }
					);
				};
			}
		}]);
}(window.angular));
