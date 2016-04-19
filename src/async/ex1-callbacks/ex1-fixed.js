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
// The old-n-busted callback way

    function getFile(file) {
        fakeAjax(file, function (text) {
            fileReceived(file, text);
        });
    }

    function fileReceived(file, text) {
        // haven't received this text yet?
        if (!responses[file]) {
            responses[file] = text;
        }

        var files = ["file1", "file2", "file3"];

        // loop through responses in order for rendering
        for (var i = 0; i < files.length; i++) {
            // response received?
            if (files[i] in responses) {
                // response needs to be rendered?
                if (responses[files[i]] !== true) {
                    output.push(responses[files[i]]);
                    responses[files[i]] = true;
                }
            }
            // can't render yet
            else {
                // not complete!
                return false;
            }
        }

        output.push("Complete!");
        if(_done){
            _done(output);
        }
    }

// hold responses in whatever order they come back
    var responses = {};
    var output = [];
    var _done = undefined;
    this.start = (done) => {
        "use strict";
        _done = done;
        // request all files at once in "parallel"
        getFile("file1");
        getFile("file2");
        getFile("file3");
    }
}
