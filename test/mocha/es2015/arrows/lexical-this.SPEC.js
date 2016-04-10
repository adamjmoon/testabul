var chai = require("chai");
var expect = chai.expect;
var ctx = require("../../../../dist/arrows/lexical_this").default;

describe('Demonstrate arrow functions and Lexical this ', function () {

    describe('bobObjOld this not in scope for printFriends()', function ()   {
        it('should throw TypeError', function () {
            ctx.bobObjOld._friends.push("Sam");
            expect(ctx.bobObjOld.printFriends).to.throw(TypeError);
        });
    });

    describe('bobOldFuncInst this not in scope for printFriends()', function ()   {

        it('should throw TypeError', function () {
            var bobOldFuncInstance = new ctx.BobFuncOld();
            bobOldFuncInstance._friends.push("Sam");
            expect(bobOldFuncInstance.printFriends).to.throw(TypeError);
        });
    });

    describe('bobObjNew this in scope for printFriends()', function () {
        it('should know Bill and Sam', function () {
            ctx.bobObjNew._friends.push("Sam");
            expect(ctx.bobObjNew.printFriends()).to.equal("Bob knows Bill Bob knows Sam");
        });
    });

    describe('bobFuncNew this in scope for printFriends()', function () {
        it('should know Bill and Sam', function () {
            var bobNewFuncInstance = new ctx.BobFuncNew();
            bobNewFuncInstance._friends.push("Sam");
            expect(bobNewFuncInstance.printFriends()).to.equal("Bob knows Bill Bob knows Sam");
        });
    });
});

