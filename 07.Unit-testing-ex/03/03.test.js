const { expect } = require('chai');
const lookupChar = require('./03.char-lookup');


describe('Char lookup', () => {
    describe('testing undefined return', () => {
        it('returns undefined for a number and valid index', () => {
            expect(lookupChar(42, 1)).to.equal(undefined);
        });
        it('returns undefined for a boolean and valid index', () => {
            expect(lookupChar(true, 1)).to.equal(undefined);
        });
        it('returns undefined for a array and valid index', () => {
            expect(lookupChar([1, 2, 3], 1)).to.equal(undefined);
        });
        it('returns undefined with index that is a striung', () => {
            expect(lookupChar('test', '1')).to.equal(undefined);
        });
        it('returns undefined with floating number', () => {
            expect(lookupChar('test', 3.14)).to.equal(undefined);
        });
    });

    describe('testing Incorect Index return', () => {
        it('returns incorrect index with negative index', () => {
            expect(lookupChar('test', -5)).to.equal('Incorrect index');
        });
        it('returns incorrect index with index outside of length', () => {
            expect(lookupChar('test', 20)).to.equal('Incorrect index');
        });

    });
    describe('testing correct Char return', () => {
        it('returns correct char return', () => {
            expect(lookupChar('test', 1)).to.equal('e');
        });
        it('returns correct char return', () => {
            expect(lookupChar('test', 0)).to.equal('t');
        });
    });
});