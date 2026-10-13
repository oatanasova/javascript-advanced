const { expect } = require('chai');
const rgbToHexColor = require('../06.rgb2hex');

describe("RGB to Hex", () => {
    describe("valid input", () => {
        it("valid green range", () => {
            expect(rgbToHexColor(147, 15 , 89)).to.equal('#930F59');
        });
        it("all 0", () => {
            expect(rgbToHexColor(0,0,0)).to.equal('#000000');
        });
        it("all 255", () => {
            expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
        });
    });
    describe("invalid range", () => {
        it("negative range", () => {
            expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        });
        it("too high range", () => {
            expect(rgbToHexColor(15, 125, 375)).to.be.undefined;
        });
        it("negative green range", () => {
            expect(rgbToHexColor(33,-1, 100)).to.be.undefined;
        });
    });
    describe("invalid input type", () => {
        it("non-integer type", () => {
            expect(rgbToHexColor(100, 3.14, 100)).to.be.undefined;
        });
        it("invalid red type", () => {
            expect(rgbToHexColor('R', 15, 125)).to.be.undefined;
        });
        it("invalid blue type", () => {
            expect(rgbToHexColor(53, 21, {})).to.be.undefined;
        });
    });
});