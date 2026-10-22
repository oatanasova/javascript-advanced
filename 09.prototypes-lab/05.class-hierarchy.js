function solve() {
    class Figure {
        constructor() {
            this.units = 'cm';
        }

        changeUnits(newUnit) {
            const conversions = {
                cm: { m: 0.01, mm: 10, cm: 1 },
                m: { cm: 100, mm: 1000, m: 1 },
                mm: { cm: 0.1, m: 0.001, mm: 1 }
            };

            const factor = conversions[this.units][newUnit];

            if (this.radius !== undefined) {
                this.radius *= factor;
            }

            if (this.width !== undefined) {
                this.width *= factor;
                this.height *= factor;
            }

            this.units = newUnit;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    };

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
        }
    };

    class Rectangle extends Figure {
        constructor(width, height, unit) {
            super();
            this.width = width;
            this.height = height;
            this.changeUnits(unit);
        }

        get area() {
            return this.width * this.height;
        }
        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    };

    return { Figure, Circle, Rectangle };
}

let test = solve();
let c = new test.Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new test.Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
