"use strict";

(function(angular) {
	const applicationGlobalSettings = {
		title            : "Angular Exercises / Reservation Application",
		version          : 0.9,
		author           : "Josh R. Dunlavy",
		fetchRestUrl     : suffix => {
			if (!suffix) return;

			const vendorUrl = "https://confdeconflictor.firebaseio.com/";
			const urlExt = ".json";

			return vendorUrl + suffix + urlExt;
		}
	};

	angular
		.module("application", ["ngRoute"])
		.constant("settings", applicationGlobalSettings)
		.config(
			function ($locationProvider, $routeProvider) {
				$locationProvider.html5Mode(true);

				$routeProvider
					.when("/exercise1", {
						templateUrl: "/www/app/partials/exercise1.partial.htm",
						controller: "exercise1Controller",
						controllerAs: "vm"
					})
					.when("/exercise2", {
						templateUrl: "/www/app/partials/exercise2.partial.htm",
						controller: "exercise2Controller",
						controllerAs: "vm"
					})
					.when("/room/:id", {
						template: "<room></room>",
					})
					.otherwise({
						templateUrl: "/www/app/partials/welcome.partial.htm",
						controller: "welcomeController",
						controllerAs: "vm"
					});
			})
}(window.angular));