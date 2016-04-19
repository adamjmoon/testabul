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
// The thunk way
	function getFile(file) {
		var resp;

		fakeAjax(file,function(text){
			if (!resp) resp = text;
			else resp(text);
		});

		return function th(cb) {
			if (resp) cb(resp);
			else resp = cb;
		};
	}


	this.start = () => {
		"use strict";
		return function th(cb) {
			var output = [];
			// request all files at once in "parallel"
			var th1 = getFile("file1");
			var th2 = getFile("file2");
			var th3 = getFile("file3");

			th1(function ready(text){
				output.push(text);
				th2(function ready(text){
					output.push(text);
					th3(function ready(text){
						output.push(text);
						output.push("Complete!");
						if(cb) cb(output);
					});
				});
			});
		};
	}
}

