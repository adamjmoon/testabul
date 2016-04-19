import Rx from "rx";

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
// The rx/observable/promise way
	function getFile(file) {
		return new Promise(function(resolve){
			fakeAjax(file,resolve);
		});
	}

	this.start = (_output = [], input = ["file1","file2","file3"]) => {
		return Rx.Observable.create((observer) => {
			Rx.Observable.fromArray(input)
		   .concatMap(file => Rx.Observable.fromPromise(getFile(file)))
		   .subscribe(
	    	(fileResult) => _output = [..._output,fileResult],
			(error) => {throw error;},
			() => {	_output = [..._output,"Complete!"];	observer.onNext(_output);}
		   );
		});
	}
}
