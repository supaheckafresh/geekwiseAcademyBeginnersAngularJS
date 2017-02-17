(function(angular) {
	angular
		.module("application")
		.component("room", {
			templateUrl  : "www/app/components/room/room.htm",
			controller   : "roomController",
			controllerAs : "vm"
		});
}(window.angular));