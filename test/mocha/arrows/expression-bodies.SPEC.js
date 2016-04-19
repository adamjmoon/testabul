var chai = require("chai");
var expect = chai.expect;

describe('Demonstrate arrow functions with ', function () {
    // Expression bodies
    var evens = [2,4,6,8,10];

    it('should be array of odds', function () {
        var odds = evens.map(v => v + 1);
        expect(odds).to.deep.equal([3,5,7,9,11]);
    });

    it('should add index in array to each array value', function () {
        var nums = evens.map((v, i) => v + i);
        expect(nums).to.deep.equal([2,5,8,11,14]);
    });
});