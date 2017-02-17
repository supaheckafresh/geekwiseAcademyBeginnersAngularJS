"use strict";

(function(angular) {
	angular
		.module("application")
		.component("rooms", {
			templateUrl  : "www/app/components/rooms/rooms.htm",
			controller   : "roomsController",
			controllerAs : "vm",
			transclude   : true
		});
}(window.angular));