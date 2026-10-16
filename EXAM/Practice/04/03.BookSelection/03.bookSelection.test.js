const { expect } = require('chai');
const bookSelection = require('./03.bookSelection');

describe("bookSelection", function () {
    describe("isGenreSuitable", function () {
        it("return a message with valid input", function () {
            expect(bookSelection.isGenreSuitable("Horror", 18)).to.equal("Those books are suitable");
            expect(bookSelection.isGenreSuitable("Horror", 12)).to.equal("Books with Horror genre are not suitable for kids at 12 age");
            expect(bookSelection.isGenreSuitable("Thriller", 10)).to.equal("Books with Thriller genre are not suitable for kids at 10 age");
        });
    });

    describe("isItAffordable ", function () {
        it("return a message with valid input", function () {
            expect(bookSelection.isItAffordable(25, 100)).to.equal("Book bought. You have 75$ left");
            expect(bookSelection.isItAffordable(25, 15)).to.equal("You don't have enough money");
        });

        it("return an error with invalid input", function () {
            expect(() => bookSelection.isItAffordable(25, '25')).to.throw("Invalid input");
            expect(() => bookSelection.isItAffordable('25', 25)).to.throw("Invalid input");
            expect(() => bookSelection.isItAffordable([25],100)).to.throw("Invalid input");
            expect(() => bookSelection.isItAffordable(100,[100])).to.throw("Invalid input");
        });
    });
    describe("suitableTitles ", function () {
        it("return a message with valid input", function () {
            expect(bookSelection.suitableTitles([{ title: "Book One", genre: "Horror" },{ title: "Book Two", genre: "Comedy" },
                { title: "Book Three", genre: "Horror" }], 'Comedy')).to.deep.equal(["Book Two"]);
            expect(bookSelection.suitableTitles([{ title: "Book One", genre: "Horror" },{ title: "Book Two", genre: "Comedy" },
                { title: "Book Three", genre: "Horror" }], 'Horror')).to.deep.equal(["Book One", "Book Three"]);
        });

        it("return an error with invalid input", function () {
            expect(() => bookSelection.suitableTitles([{ title: "Book One", genre: "Horror" }], 123)).to.throw("Invalid input");
            expect(() => bookSelection.suitableTitles('Book One', 'Comedy')).to.throw("Invalid input");
        });
    });
});
