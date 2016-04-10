// Shape - superclass
function Shape() {
    this.x = 0;
    this.y = 0;
}

// superclass method
Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    return 'Shape moved';
};

export default Shape;