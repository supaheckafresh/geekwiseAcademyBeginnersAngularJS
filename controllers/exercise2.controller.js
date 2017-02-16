"use strict";

(function(angular) {
	angular
		.module("application")
		.controller("exercise2Controller", function() {
			this.submit = function() {
				alert("Form submitted");
			}
		});
}(window.angular));