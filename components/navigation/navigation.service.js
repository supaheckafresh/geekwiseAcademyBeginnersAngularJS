"use strict";

(function (angular) {
	angular
		.module("application")

		.factory("navigationService", ["$route", function ($route) {
			let applicationAngularRoutes = _fetchRoutesPairs();

			return {
				applicationAngularRoutes
			};

			function _fetchRoutesPairs() {
				console.log("Building routes from service \"navigationService\"");

				const returnArrayOfUrlNamePairs = [];

				angular.forEach($route.routes, function (r) {
					// we don't want redirect routes OR
					// routes without direct controllers
					// (these are components)

					if (!!r.redirectTo || !r.controller) {
						return;
					}

					let routeUrlNamePair = {
						url: r.originalPath || '/',								// our url will be what Angular tracks as "originalPath"
						name: r.controller.replace(/controller/gi, "")		// use JavaScript replace() to trim controller path to
						// just the name
					};

					returnArrayOfUrlNamePairs.push(routeUrlNamePair);
				});

				return _arrangeRouteElementToFirst("welcome", returnArrayOfUrlNamePairs);
			}

			function _arrangeRouteElementToFirst(routeName, array) {
				console.log("Arranging \"" + routeName + "\" to beginning of routes list");

				array.forEach(function (elementInArray, indexOfElement) {
					if (elementInArray.name && elementInArray.name.toLowerCase() === routeName.toLowerCase()) {
						array.splice(indexOfElement, 1);
						array.splice(0, 0, elementInArray);
					}
				});

				return array;
			}
		}]);
}(window.angular))