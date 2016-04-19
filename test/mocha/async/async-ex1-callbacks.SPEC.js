"use strict";
var chai = require("chai");
var expect = chai.expect;
var Context = require('../../../dist/async/ex1-callbacks/ex1-fixed').default;

describe("Demonstrate async with callbacks", function(){

    it("Output array should have files in correct order",function(done){
        let ctx = new Context();
        ctx.start((output) => {
            expect(output[0]).to.equal("The first text");
            expect(output[1]).to.equal("The second text");
            expect(output[2]).to.equal("The third text");
            expect(output[3]).to.equal("Complete!");
            done();
        });
    });
});