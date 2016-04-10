var chai = require("chai");
var expect = chai.expect;
var Rectangle_Old = require("../../../src/classes/Rectangle_Old");
var Rectangle_New = require("../../../dist/classes/Rectangle_New").default;
var Shape = require("../../../dist/classes/Shape").default;


describe('Demonstrate classes and inheritance ', function () {
    var rectangleOldInstance =  new Rectangle_Old(10,20);
    var rectangleNewInstance =  new Rectangle_New(10,20);

    it('rectangleOldInstance should be instance of Shape', function () {
        expect(rectangleOldInstance instanceof Shape).to.be.equal(true);
    });

    it('rectangleNewInstance should be instance of Shape', function () {
        expect(rectangleNewInstance instanceof Shape).to.be.equal(true);
    });

    it('rectangleOldInstance should be able to move', function () {
        expect(rectangleOldInstance.move(1,1)).to.be.equal("Shape moved");
    });

    it('rectangleNewInstance should be able to move', function () {
        expect(rectangleNewInstance.move(1,1)).to.be.equal("Shape moved");
    });

    it('rectangleOldInstance should be able to calculate area', function () {
        expect(rectangleOldInstance.area()).to.be.equal(200);
    });

    it('rectangleNewInstance should be able to calculate area', function () {
        expect(rectangleNewInstance.area()).to.be.equal(200);
    });


});