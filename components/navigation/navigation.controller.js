"use strict";

(function(angular) {
	angular
		.module("application")
		.controller("navigationController", ["navigationService", function(navigation) {
			this.navigation = navigation.applicationAngularRoutes;
		}]);
}(window.angular));
