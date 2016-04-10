import Shape from "./Shape"

class Rectangle extends Shape {
    constructor(l,w) {
        super();
        this.length=l;
        this.width=w;
    }

    //instance method accessed via obj=new Circle(r); obj.area();
    area() {
        return this.length * this.width;
    };

    //instance getter and setters accessed via obj.radius or obj.radius = 5;
    get length() {
        return this._length;
    };
    set length(l) {
        if (!Number.isInteger(l))
            throw new Error("Length must be an integer.");
        this._length = l;
    };

    get width() {
        return this._width;
    };
    set width(w) {
        if (!Number.isInteger(w))
            throw new Error("Length must be an integer.");
        this._width = w;
    };

}

export default Rectangle;