import Rx from "rx";

export default function (url) {
  return Rx.Observable.create((observer) => {
    var fake_responses = {
      "file1": "The first text",
      "file2": "The second text",
      "file3": "The third text"
    };
    var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

    setTimeout(function () {
      observer.onNext(fake_responses[url]);
    }, randomDelay);
  });
}
