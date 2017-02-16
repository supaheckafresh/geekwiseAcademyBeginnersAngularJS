(function(angular) {
	angular
		.module("application")
		.component("room", {
			templateUrl  : "components/room/room.htm",
			controller   : "roomController",
			controllerAs : "vm"
		});
}(window.angular));