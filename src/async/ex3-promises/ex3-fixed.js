export default function () {
	function fakeAjax(url, cb) {
		var fake_responses = {
			"file1": "The first text",
			"file2": "The second text",
			"file3": "The third text"
		};
		var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

		setTimeout(function () {
			cb(fake_responses[url]);
		}, randomDelay);
	}
// **************************************
// The promise way
	function getFile(file) {
		return new Promise(function(resolve){
			fakeAjax(file,resolve);
		});
	}

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