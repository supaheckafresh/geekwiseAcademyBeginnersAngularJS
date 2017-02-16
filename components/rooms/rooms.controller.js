"use strict";

(function(angular) {
	angular
		.module("application")
		.controller("roomsController", ["roomsService", function(roomsService) {
			this.$onInit = function() {
				this.returnFetchedRooms = roomsService.returnFetchedRooms;
			};
		}]);
}(window.angular));