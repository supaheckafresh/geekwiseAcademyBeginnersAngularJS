(function (angular) {
	angular
		.module("application")
		.factory("modalService", ["$q", "settings", function($q, settings) {
			let modal = {
				isLogin        : false,
				isRegister     : false,
				isPrompt       : false
			};

			return {
				modal,  // what our children bind to

				showLogin,
				showRegister,
				showPrompt,
				close
			};

			// set up our modal for login
			function showLogin(callback) {
				modal.message = "Login to " + settings.title;
				modal.buttonObj1 = null;
				modal.buttonObj2 = {
					text     : "Login",
					callback : $q.when(callback)
				};
				modal.isLogin = true;
			}

			function showRegister(callback) {
				modal.message = "Register for " + settings.title;
				modal.buttonObj1 = null;
				modal.buttonObj2 = {
					text     : "Register",
					callback : $q.when(callback)
				};
				modal.isRegister = true;
			}

			// set up our modal for prompt
			function showPrompt(message, buttonObj1, buttonObj2) {
				// validation
				let errorString = "You didn't use me right";

				if (buttonObj1 && typeof buttonObj1 !== 'object')
					throw new Error(errorString);

				if (buttonObj2 && typeof buttonObj2 !== 'object')
					throw new Error(errorString);

				// set our modal object properties
				modal.message = message;
				modal.buttonObj1 = buttonObj1;
				modal.buttonObj2 = buttonObj2;
				modal.isPrompt = true;
			}

			// set the modal object to a pristine state without reassignment
			function close() {
				delete modal.buttonObj1;
				delete modal.buttonObj2;

				modal.isLogin = false;
				modal.isRegister = false;
				modal.isPrompt = false;
				modal.message = null;
			}
		}]);
} (window.angular))
