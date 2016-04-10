var chai = require("chai");
var expect = chai.expect;

describe('Demonstrate arrow functions in Statement bodies ', function () {

    var nums = [5,10,15,19];
    var fives = [];
    // Statement bodies
    nums.forEach(v => {
        if (v % 5 === 0)
            fives.push(v);
    });

    it('should only contain values divisible by 5', function () {

        expect(fives).to.deep.equal([5,10,15]);
    });

});