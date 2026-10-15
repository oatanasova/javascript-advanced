const { expect } = require('chai');
const foodDelivery = require('./03.food-delivery');

describe('foodDelivery', function () {
    describe('getCategory', function () {
        it("return a message valid input", function () {
            expect(foodDelivery.getCategory("Vegan")).to.equal("Dishes that contain no animal products.");
            expect(foodDelivery.getCategory("Vegetarian")).to.equal("Dishes that contain no meat or fish.");
            expect(foodDelivery.getCategory("Gluten-Free")).to.equal("Dishes that contain no gluten.");
            expect(foodDelivery.getCategory("All")).to.equal("All available dishes.");
        });
        it("return an error with invalid input", function () {
            expect(() => foodDelivery.getCategory('BBQ')).to.throw("Invalid Category!");
            expect(() => foodDelivery.getCategory('123')).to.throw("Invalid Category!");
            expect(() => foodDelivery.getCategory('Vegan-free')).to.throw("Invalid Category!");
        });

    });

    describe('addMenuItem', function () {
        it("returns a message with valid input", function () {
            let tester = foodDelivery.addMenuItem([
                { name: "Burger", price: 8 },
                { name: "Salad", price: 6 },
                { name: "Soup", price: 4 }
            ], 10);

            expect(tester).to.equal("There are 3 available menu items matching your criteria!");
        });
        it("returns a message with valid input", function () {
            let tester = foodDelivery.addMenuItem([{ name: "Burger", price: 8 }, { name: "Soup", price: 6 }], 6);

            expect(tester).to.equal("There are 1 available menu items matching your criteria!");
        });
        it("returns an error with invalid input", function () {
            expect(() => foodDelivery.addMenuItem("Burger", 6)).to.throw("Invalid Information!");
            expect(() => foodDelivery.addMenuItem([], 7)).to.throw("Invalid Information!");
            expect(() => foodDelivery.addMenuItem([{ name: "Burger", price: 8 }], '5')).to.throw("Invalid Information!");
            expect(() => foodDelivery.addMenuItem([{ name: "Burger", price: 10 }], 4)).to.throw("Invalid Information!");
            expect(() => foodDelivery.addMenuItem([{ name: "Burger", price: 4 }], -10)).to.throw("Invalid Information!");
        });
    });

    describe('calculateOrderCost', function () {
        it("return a message with valid input", function () {
            expect(foodDelivery.calculateOrderCost(["standard", "express"], ["sauce", "beverage"], false)).to.equal("You spend $12.50 for shipping and addons!");
            expect(foodDelivery.calculateOrderCost(["standard", "express"], ["sauce", "beverage"], true)).to.equal("You spend $10.63 for shipping and addons with a 15% discount!");
            expect(foodDelivery.calculateOrderCost([], [], false)).to.equal("You spend $0.00 for shipping and addons!");
        });
        it("return an error with invalid input", function () {
            expect(() => foodDelivery.calculateOrderCost("standard", ["sauce", "beverage"], false)).to.throw("Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost(["standard", "express"], "sauce", false)).to.throw("Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost(["standard", "express"], ["sauce", "beverage"], 'false')).to.throw("Invalid Information!");
        });
    });
});