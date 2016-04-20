import fakeAjax from "../fakeAjax-promise"

export default function () {
	"use strict";
// **************************************
// The map/reduce/promise way
	let getFile = (file) => fakeAjax(file);

	this.start = (_output = [], input = ["file1","file2","file3"]) => {

		return Promise.resolve(

			// request all files at once in "parallel"
			// Request all files at once in
			// "parallel" via `getFile(..)`.

			input
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
