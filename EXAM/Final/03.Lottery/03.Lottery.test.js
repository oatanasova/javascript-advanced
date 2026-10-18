const { expect } = require('chai');
const lottery = require('./03.Lottery');

describe("Testing of lottery", function () {
    describe("buyLotteryTicket", function () {
        it("return a message with valid input - can buy", function () {
            expect(lottery.buyLotteryTicket(5, 3, true)).to.equal("You bought 3 tickets for 15$.");
        });
        it("return a message with valid/invalid input - can't buy", function () {
            expect(() => lottery.buyLotteryTicket(5, 3, false)).to.throw("Unable to buy lottery ticket!");
            expect(() => lottery.buyLotteryTicket('5', 3, false)).to.throw("Unable to buy lottery ticket!");
        });
        it("return an error with invalid input", function () {
            expect(() => lottery.buyLotteryTicket('5', 3, true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(5, '3', true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(5, 3, 0)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(-5, 3, true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(0, 3, true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(5, 0, true)).to.throw("Invalid input!");
        });
    });

    describe("checkTicket", function () {
        it("return a message with valid input", function () {
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 12, 13, 7, 8, 9])).to.be.undefined;
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 13, 7, 8, 9])).to.be.undefined;
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 7, 8, 9])).to.equal("Congratulations you win, check your reward!");
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 8, 9])).to.equal("Congratulations you win, check your reward!");
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 9])).to.equal("Congratulations you win, check your reward!");
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal("You win the JACKPOT!!!");
        });
        it("return an error with invalid input", function () {
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5])).to.throw("Invalid input!");
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6, 7])).to.throw("Invalid input!");
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6])).to.throw("Invalid input!");
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6])).to.throw("Invalid input!");
            expect(() => lottery.checkTicket('1, 2, 3, 4, 5, 6', [1, 2, 3, 4, 5, 6])).to.throw("Invalid input!");
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], '1, 2, 3, 4, 5, 6')).to.throw("Invalid input!");
        });
    });

    describe("secondChance", function () {
        it("return a message with valid input", function () {
            expect(lottery.secondChance(123, [123, 456, 789])).to.equal("You win our second chance prize!");
            expect(lottery.secondChance(123, [456, 789])).to.equal("Sorry, your ticket didn't win!");
            expect(lottery.secondChance(123, [])).to.equal("Sorry, your ticket didn't win!");

        });
        it("return an error with invalid input", function () {
            expect(() => lottery.secondChance('123', [123, 456, 789])).to.throw("Invalid input!");
            expect(() => lottery.secondChance(123, 123)).to.throw("Invalid input!");
        });
    });
});



// it("return a message with valid input", function () {
//     expect(onlineStore.isProductAvailable("coffee", 18)).to.equal("Great! coffee is available for purchase.");
//     expect(onlineStore.isProductAvailable("coffee", 0)).to.equal("Sorry, coffee is currently out of stock.");
//     expect(onlineStore.isProductAvailable("coffee", -10)).to.equal("Sorry, coffee is currently out of stock.");

// });
// it("return an error with invalid input", function () {
//     expect(() => onlineStore.isProductAvailable('coffee', '10')).to.throw("Invalid input.");
//     expect(() => onlineStore.isProductAvailable(true, 5)).to.throw("Invalid input.");
//     expect(() => onlineStore.isProductAvailable('mermaid', false)).to.throw("Invalid input.");
//     expect(() => onlineStore.isProductAvailable(['beans'], 15)).to.throw("Invalid input.");
// });