"use strict";

// wrap all our pieces together and tell Angular module we're using
// about them
(function(angular) {
	angular
		.module("application")
		.component("navigation", {
			templateUrl  : "components/navigation/navigation.htm",
			controller   : "navigationController",
			controllerAs : "vm"
		});
} (window.angular));
