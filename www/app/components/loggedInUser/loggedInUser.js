(function(angular) {
	angular
		.module("application")
		.component("loggedInUser", {
			templateUrl  : "www/app/components/loggedInUser/loggedInUser.htm",
			controller   : "loggedInUserController",
			controllerAs : "vm"
		});
} (window.angular));