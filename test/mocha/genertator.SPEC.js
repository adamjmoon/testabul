import foo from "../../src/generators/foo";
import fibonacci from "../../src/generators/fibonacci";
console.log(foo);
var chai = require("chai");
var expect = chai.expect;

describe('generator function foo', function () {
    
    var iterator = foo()();

    var state = iterator.next();
    it('generator state should be first yield iteration', function () {
        expect(state.value).to.be.equal(1);
        expect(state.done).to.be.equal(false);
    });
    var stateNext = iterator.next();

    it('generator state should be done with return statement', function () {
        expect(stateNext.value).to.be.equal(2);
        expect(stateNext.done).to.be.equal(true);
    });

});


describe('generator function fibonacci', function () {

    for (var n of fibonacci) {
      // truncate the sequence at 1000
      if (n > 1000)
        break;
        it('generator state should be first yield iteration', function () {
            expect(n).to.be.equal(1597);
        });
    }
});
