"use strict";

(function(angular) {
	angular
		.module("application")
		.controller("roomController", ["$routeParams", "$http", function($routeParams, $http) {
			this.$onInit = function() {
				this.parameters = $routeParams;
				this.roomId = $routeParams.id;
			};
		}]);
}(window.angular));
