export default function () {
	function fakeAjax(url, cb) {
		var fake_responses = {
			"file1": "The first text",
			"file2": "The middle text",
			"file3": "The last text"
		};
		var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

		setTimeout(function () {
			cb(fake_responses[url]);
		}, randomDelay);
	}
// **************************************
// The old-n-busted callback way

	function getFile(file) {
		fakeAjax(file, function (text) {
			// what do we do here?
		});
	}

	// hold responses in whatever order they come back
	var responses = {};
	var output = [];
	var _done = undefined;

	this.start = (done) => {
		"use strict";
		_done=done;
		// request all files at once in "parallel"
		getFile("file1");
		getFile("file2");
		getFile("file3");
	}

}

