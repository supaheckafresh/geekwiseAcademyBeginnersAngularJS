"use strict";

(function (angular) {
	angular
		.module("application")
		.controller("exercise1Controller", function(modalService) {
			// capturing controller scope here, used again in _getRandomColor
			let vm = this;

			// creating callback function showAlertCallback below, I'm using bind to set "this" in the function to
			// this controller so I can access bound properties like rollButtonText

			// I get my homemade modal to show by invoking our service function, which you wrap in a function so you
			// may bind to an event like ng-click
			this.showPrompt = function() {
				modalService.showPrompt(
					"This is our first test",

					{
						text     : "Show Alert",
						callback : showAlertCallback.bind(this)
					},

					{
						text: "Be Quiet"
					}
				);
			};

      //TODO:
      (function yes(no) { alert(no) }('yes'));

			// modal callback
			function showAlertCallback() {
				this.rollButtonText = "I changed because you pressed alert";
				alert("Showing alert!");
			}


			// bindable publics
			this.title = "exercise title";

			this.rollButtonText = "Roll Me";

			this.lastObjectClickedText = null;

			this.possibleColors = [
				{
					name: "Brown",
					hex: "#A52A2A"
				},
				{
					name: "Blue",
					hex: "#0000FF"
				},
				{
					name: "Gainsboro",
					hex: "#DCDCDC"
				}
			];

			this.controllerInitializedObject = {
				name: "Object 1",
				clickCount: 0,
				color: _getRandomColor()
			};

			this.objectArray = [this.controllerInitializedObject];

			this.rollMethod = function () {
				this.rollButtonText = "I'm Rolled";
			};

			this.addNewObject = function () {
				let newObject = {
					name: "Object " + (this.objectArray.length + 1),
					clickCount: 0,
					color: _getRandomColor()
				};

				this.objectArray.push(newObject);
			};

			this.objectClicked = function (obj) {
				obj.clickCount++;
				this.lastObjectClickedText = obj.name + " clicked " + obj.clickCount + " times";
				console.log(this.lastObjectClickedText);
			};

			this.clearColorFilter = function() {
				if (this.filter.color === null) {
					// delete color from filter object, otherwise the filter will test for elements in an array
					// with color set to null...

					// setting this.filter.color equal to null is not equivalent to delete(this.filter.color)
					// as far as Angular filtering goes

					// please see http://adripofjavascript.com/blog/drips/the-delete-operator-in-javascript.html
					delete(this.filter.color);
				}
			};

			// hoisted, private function
			function _getRandomColor() {
				let randomColor = vm.possibleColors[Math.floor(Math.random() * vm.possibleColors.length)];

				// randomColor is actually an object, we return only the hex property we need
				return randomColor.hex;
			}
		});
}(window.angular));