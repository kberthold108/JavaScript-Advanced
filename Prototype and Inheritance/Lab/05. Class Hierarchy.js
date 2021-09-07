function hierarchy() {
    class Figure {
        constructor() {
            this.currUnit = "cm";
        }
    
        get area() {
            return "";
        }

        toString() {

        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;

        }

        get area () {
            return Math.PI * this.radius * this.radius;
        }

    }

    class Rectangle extends Figure {
        constructor(width, heigth, unit) {
            super();
            this.width = width;
            this.heigth = heigth;
            this.currUnit = unit;
        }

        get area() {
            return this.width * this.heigth;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    };
}

