const { expect } = require('chai');
const createCalculator = require('../07.add-subtract');

describe("Add and Subtract", () => {
    describe("module structure", () => {
        it("returns an object", () => {
            const calculator = createCalculator();

            expect(calculator).to.be.an("object");
        });

        it("contains add, subtract and get functions", () => {
            const calculator = createCalculator();

            expect(calculator.add).to.be.a("function");
            expect(calculator.subtract).to.be.a("function");
            expect(calculator.get).to.be.a("function");
        });
    });

    describe("add and subtract", () => {
        it("adds a number", () => {
            const calculator = createCalculator();

            calculator.add(5);

            expect(calculator.get()).to.equal(5);
        });

        it("subtracts a number", () => {
            const calculator = createCalculator();

            calculator.subtract(5);

            expect(calculator.get()).to.equal(-5);
        });

        it("adds a negative number", () => {
            const calculator = createCalculator();

            calculator.add(-15);

            expect(calculator.get()).to.equal(-15);
        });

        it("adds a numeric string", () => {
            const calculator = createCalculator();

            calculator.add("5");

            expect(calculator.get()).to.equal(5);
        });

        it("subtracts a numeric string", () => {
            const calculator = createCalculator();

            calculator.subtract("5");

            expect(calculator.get()).to.equal(-5);
        });

        it("adds a negative numeric string", () => {
            const calculator = createCalculator();

            calculator.add("-15");

            expect(calculator.get()).to.equal(-15);
        });
    });

    describe("internal sum", () => {
        it("starts at zero", () => {
            const calculator = createCalculator();

            expect(calculator.get()).to.equal(0);
        });

        it("keeps the sum internal", () => {
            const calculator = createCalculator();

            calculator.value = 100;

            expect(calculator.get()).to.equal(0);
        });

        it("maintains separate internal sums", () => {
            const calculator1 = createCalculator();
            const calculator2 = createCalculator();

            calculator1.add(10);

            expect(calculator1.get()).to.equal(10);
            expect(calculator2.get()).to.equal(0);
        });
    });
});