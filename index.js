"use strict";

(function(angular) {
	const applicationGlobalSettings = {
		title            : "Angular Exercises / Reservation Application",
		version          : 0.9,
		author           : "Josh R. Dunlavy",
		fetchFirebaseUrl : suffix => {
			if (!suffix) return;

			const prefix = "https://confdeconflictor.firebaseio.com/";
			const firebaseJsonSuffix = ".json";

			return prefix + suffix + firebaseJsonSuffix;
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
						templateUrl: "/partials/exercise1.partial.htm",
						controller: "exercise1Controller",
						controllerAs: "vm"
					})
					.when("/exercise2", {
						templateUrl: "/partials/exercise2.partial.htm",
						controller: "exercise2Controller",
						controllerAs: "vm"
					})
					.when("/room/:id", {
						template: "<room></room>",
					})
					.otherwise({
						templateUrl: "/partials/welcome.partial.htm",
						controller: "welcomeController",
						controllerAs: "vm"
					});
			})
}(window.angular));