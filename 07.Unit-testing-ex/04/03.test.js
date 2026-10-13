const { expect } = require('chai');
const mathEnforcer = require('./04.math-enforcer');

describe('MathEnforcer', () => {

    describe('addFive', () => {
        it('returns undefined for non-number', () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
        });

        it('adds 5 to a positive number', () => {
            expect(mathEnforcer.addFive(10)).to.equal(15);
        });

        it('adds 5 to a negative number', () => {
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
        });

        it('works with floating-point numbers', () => {
            expect(mathEnforcer.addFive(2.27)).to.be.closeTo(7.27, 0.01);
        });
    });

    describe('subtractTen', () => {
        it('returns undefined for non-number', () => {
            expect(mathEnforcer.subtractTen('10')).to.be.undefined;
        });

        it('subtracts 10 from a positive number', () => {
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
        });

        it('subtracts 10 from a negative number', () => {
            expect(mathEnforcer.subtractTen(-20)).to.equal(-30);
        });

        it('works with floating-point numbers', () => {
            expect(mathEnforcer.subtractTen(12.27)).to.be.closeTo(2.27, 0.01);
        });
    });

    describe('sum', () => {
        it('returns undefined when the first parameter is not a number', () => {
            expect(mathEnforcer.sum('10', 5)).to.be.undefined;
        });

        it('returns undefined when the second parameter is not a number', () => {
            expect(mathEnforcer.sum(10, '5')).to.be.undefined;
        });

        it('returns the sum of positive numbers', () => {
            expect(mathEnforcer.sum(10, 5)).to.equal(15);
        });

        it('returns the sum of negative numbers', () => {
            expect(mathEnforcer.sum(-10, -5)).to.equal(-15);
        });

        it('returns the sum of positive and negative numbers', () => {
            expect(mathEnforcer.sum(-10, 15)).to.equal(5);
        });

        it('works with floating-point numbers', () => {
            expect(mathEnforcer.sum(2.27, 2.24)).to.be.closeTo(4.51, 0.01);
        });
    });

});