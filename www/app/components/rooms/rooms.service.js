"use strict";

(function (angular) {
	angular
		.module("application")
		.factory("roomsService", ["$q", "$http", function($q, $http) {
			// let's init the rooms only when this service is constructed... and never again...
			// may not be the best idea but I don't see rooms changing all that often in this
			// facility; loginService is then tasked with initializing this service because
			// only logged in users may view rooms

			let _roomsFromFirebase = null;

			return {
				initializeRoomsFromFirebase,
				returnFetchedRooms
			};

			function initializeRoomsFromFirebase() {
				_roomsFromFirebase = null;

				// two ways to get the data... via rest endpoint using $http or Firebase ref wrapped in $q
				// this has no token, so security has to be lax on the back-end in order to get a 200 response
				//		return $http({
				//			url    : "https://confdeconflictor.firebaseio.com/rooms.json",
				//			method : "GET"
				//		})
				// this method, though, attaches authentication to the request so if I lock the resource
				// down to authenticated users, this will return results once a user does authenticate
				return $q.when(firebase.database().ref("/rooms/").once("value"))
					.then(function(rooms) {
						if (rooms.val)
							rooms = rooms.val(); // using Firebase above
						else
							rooms = rooms.data;  // using $http above

						console.log(rooms.length + " rooms fetched from Firebase database");

						_roomsFromFirebase = rooms;
					});
			}

			function returnFetchedRooms() {
				return _roomsFromFirebase;
			}
		}]);
}(window.angular));