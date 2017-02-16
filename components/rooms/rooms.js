"use strict";

(function(angular) {
	angular
		.module("application")
		.component("rooms", {
			templateUrl  : "components/rooms/rooms.htm",
			controller   : "roomsController",
			controllerAs : "vm",
			transclude   : true
		});
}(window.angular));