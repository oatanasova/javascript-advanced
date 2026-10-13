const { expect } = require('chai');
const sum = require('../04.sum-of-nums')

describe("sum of numbers", () => {
    it("positiжe numbers", () => {
        expect(sum([1, 2, 3])).to.equal(6);
    });
    it("negative numbers", () => {
        expect(sum([-1, -2, -3])).to.equal(-6);
    });

    it("zeroes", () => {
        expect(sum([0, 0, 0])).to.equal(0);
    });

    it("single number", () => {
        expect(sum([5])).to.equal(5);
    });
});
