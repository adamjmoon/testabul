export default function(url){
		var fake_responses = {
			"file1": "The first text",
			"file2": "The second text",
			"file3": "The third text",
      "file4": "The fourth text"
		};

		return new Promise(function(resolve,reject){
			var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

			setTimeout(function () {
				resolve(fake_responses[url]);
			}, randomDelay);
		});
}
