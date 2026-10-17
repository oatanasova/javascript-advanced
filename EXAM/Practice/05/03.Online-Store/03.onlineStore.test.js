const { expect } = require('chai');
const onlineStore = require('./03.onlineStore');

describe("onlineStore", function () {
    describe("isProductAvailable", function () {

        it("return a message with valid input", function () {
            expect(onlineStore.isProductAvailable("coffee", 18)).to.equal("Great! coffee is available for purchase.");
            expect(onlineStore.isProductAvailable("coffee", 0)).to.equal("Sorry, coffee is currently out of stock.");
            expect(onlineStore.isProductAvailable("coffee", -10)).to.equal("Sorry, coffee is currently out of stock.");

        });
        it("return an error with invalid input", function () {
            expect(() => onlineStore.isProductAvailable('coffee', '10')).to.throw("Invalid input.");
            expect(() => onlineStore.isProductAvailable(true, 5)).to.throw("Invalid input.");
            expect(() => onlineStore.isProductAvailable('mermaid', false)).to.throw("Invalid input.");
            expect(() => onlineStore.isProductAvailable(['beans'], 15)).to.throw("Invalid input.");
        });
    });

    describe("canAffordProduct", function () {

        it("return a message with valid input", function () {
            expect(onlineStore.canAffordProduct(10, 100)).to.equal("Product purchased. Your remaining balance is $90.");
            expect(onlineStore.canAffordProduct(10, 10)).to.equal("Product purchased. Your remaining balance is $0.");
            expect(onlineStore.canAffordProduct(100, 10)).to.equal("You don't have sufficient funds to buy this product.");
        });

        it("return an error with invalid input", function(){
            expect(() => onlineStore.canAffordProduct(true, 5)).to.throw("Invalid input.");
            expect(() => onlineStore.canAffordProduct(10, false)).to.throw("Invalid input.");
            expect(() => onlineStore.canAffordProduct('10', 20)).to.throw("Invalid input.");
            expect(() => onlineStore.canAffordProduct(10, '20')).to.throw("Invalid input.");
        });
    });
    
    describe("getRecommendedProducts", function () {
        it("return a message with valid input", function () {
            expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }], 'Photography')).to.equal("Recommended products in the Photography category: Camera");
            expect(onlineStore.getRecommendedProducts([{ name: "Banana", category: "Food" }], 'Photography')).to.equal("Sorry, we currently have no recommended products in the Photography category.");
            expect(onlineStore.getRecommendedProducts([{ name: "Banana", category: "Food" }, { name: "Honey", category: "Food" }], 'Food')).to.equal("Recommended products in the Food category: Banana, Honey");
        });
    
        it("return an error with invalid input", function(){
            expect(() => onlineStore.getRecommendedProducts(true, "Food")).to.throw("Invalid input.");
            expect(() => onlineStore.getRecommendedProducts([{ name: "Banana", category: "Food" }], 123)).to.throw("Invalid input.");
            expect(() => onlineStore.getRecommendedProducts("Banana", "Food")).to.throw("Invalid input.");
    
        });
    });
});