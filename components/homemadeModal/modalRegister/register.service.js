"use strict";

(function(angular) {
	angular
		.module("application")
		.factory("registerService", ["$http", "settings", "loginService", function ($http, settings, loginService) {
			return {
				register
			};

			function register(data, password) {
				// pass in data and password separately so I don't have to sanitize the data
				// entity before write to Firebase... otherwise, password would be included
				// in our form data and that would be a concern if it got written to database,
				// plain text... treat collected data with respect!  :-)
				console.log("Register user entity: ", data);

				// return a Firebase promise; this updates our authentication then subsequently
				// writes our full form data to Firebase and returns the data property that
				// $http fulfills with
				return createFirebaseAuthentication(data, password)
					.then(writeFormDataToFirebase)
					.then(returnDataFromResults);
			}

			function createFirebaseAuthentication(data, password) {
				return firebase.auth().createUserWithEmailAndPassword(data.email, password)
					.then(function() {
						// move data along the promise chain by returning it once this promise fulfills
						return data;
					});
			}

			function writeFormDataToFirebase(data) {
				return $http({
					url    : settings.fetchFirebaseUrl("users/" + data.email.replace(".", "_").toLowerCase()),
					method : "PUT",
					data
				});
			}

			function returnDataFromResults(results) {
				loginService.updateLoginStatus(results.data);
				return results.data;
			}
		}]);
}(window.angular));