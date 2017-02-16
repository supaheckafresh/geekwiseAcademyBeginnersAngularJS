(function(angular) {
	angular
		.module("application")
		.factory("loginService",
			["$http", "$timeout", "settings", "roomsService",
			 function($http, $timeout, settings, roomsService) {

			// this variable will keep track of our logged in user
			let loggedInUser = null;

			// this variable will help show the loading asterisk in the top-right corner
			let isServiceBusy = true;

			// actively watches Firebase authentication and propagates user results to our service variable
			firebase.auth().onAuthStateChanged(updateLoginStatus);

			return {
				login,
				gitLogin,
				logout,
				fetchLoggedInUser,
				fetchIsLoginBusy,
				updateLoginStatus
			};

			function updateLoginStatus(loggedInUserResponse) {
				isServiceBusy = true;

				loggedInUser = loggedInUserResponse;

				if (loggedInUserResponse && !loggedInUserResponse.displayName) {
					// use Firebase SDK to fetch from users
					$http.get(settings.fetchFirebaseUrl("users/" + loggedInUserResponse.email.replace(".", "_").toLowerCase()))
						.then(function(results) {
							console.log("Setting logged in user from Firebase database after login");
							loggedInUser = results.data;
							console.log("User fetched from database is", loggedInUser, results);
						});
				}

				// use Angular's timeout so we can see the loading in our top-right login section
				// Angular's timeout automatically triggers a digest so bindings update when it
				// completes
				$timeout(function() {
					roomsService.initializeRoomsFromFirebase();
					isServiceBusy = false;
					console.log("Logged in user set: ", loggedInUserResponse);
				}, 2000);
			}

			function login(usernameParam, passwordParam) {
				isServiceBusy = true;

				return firebase.auth().signInWithEmailAndPassword(usernameParam, passwordParam);
			}

			function gitLogin() {
				isServiceBusy = true;

				return firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider());
			}

			function logout() {
				isServiceBusy = true;

				return firebase.auth().signOut();
			}

			function fetchLoggedInUser() {
				return loggedInUser;
			}

			function fetchIsLoginBusy() {
				return isServiceBusy;
			}
		}]);
}(window.angular))
