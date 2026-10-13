const { expect } = require('chai');
const isOddOrEven = require('./02.even-odd')

describe('isOddOrEven', () => {
    describe('testing undefined return', () => {
        it('returns undefined for a number', () => {
            expect(isOddOrEven(42)).to.equal(undefined);
        });
        it('returns undefined for a boolean', () => {
            expect(isOddOrEven(true)).to.equal(undefined);
        });
        it('returns undefined for a array', () => {
            expect(isOddOrEven([1, 2, 3])).to.equal(undefined);
        });
    });
    describe('testing even return', () => {
        it('returns undefined for a even length', () => {
            expect(isOddOrEven('42')).to.equal('even');
        });
        it('returns undefined for a even length', () => {
            expect(isOddOrEven('true')).to.equal('even');
        });
    });
    describe('testing odd return', () => {
        it('returns undefined for a odd length', () => {
            expect(isOddOrEven('cat')).to.equal('odd');
        });
        it('returns undefined for a odd length', () => {
            expect(isOddOrEven('Hello')).to.equal('odd');
        });
    });
});