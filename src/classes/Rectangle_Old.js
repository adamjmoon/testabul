var Shape = require('../../dist/classes/Shape').default;

// Rectangle - subclass
function Rectangle(l,w) {
    Shape.call(this); // call super constructor.
    var length = l;
    var width = w;
    this.area = function() {
        return length * width;
    };
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

module.exports = Rectangle;

