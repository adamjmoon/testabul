import fakeAjax from "../fakeAjax-promise";

export default function () {
	// **************************************
	// The promise way
	let getFile = (file) => fakeAjax(file);

	this.start = () => {
		"use strict";
		return new Promise((resolve) => {
			var _output = [];
			// request all files at once in "parallel"
			// Request all files at once in
			// "parallel" via `getFile(..)`.
			var p1 = getFile("file1");
			var p2 = getFile("file2");
			var p3 = getFile("file3");

			p1
			.then((output) => {_output.push(output);})
			.then(function(){
				return p2;
			})
			.then((output) => _output.push(output))
			.then(function(){
				return p3;
			})
			.then((output) => _output.push(output))
			.then(() => _output.push("Complete!"))
			.then(() => resolve(_output));

		});
	}
}
