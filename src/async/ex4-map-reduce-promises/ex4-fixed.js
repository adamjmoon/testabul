export default function () {
	"use strict";
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
// The map/reduce/promise way
	function getFile(file) {
		return new Promise(function(resolve){
			fakeAjax(file,resolve);
		});
	}

	this.start = (_output = []) => {

		return Promise.resolve(

			// request all files at once in "parallel"
			// Request all files at once in
			// "parallel" via `getFile(..)`.

			["file1","file2","file3"]
			.map(getFile)
			.reduce(
					function(chain,filePromise){
						return chain
								.then(function(){
									return filePromise;
								})
								.then((fileOutput) => _output = [..._output, fileOutput]);
					},
					Promise.resolve() // fulfilled promise to start chain
			)
			.then(function() {
				return [..._output,"Complete!"];
			})
		);
	}
}
