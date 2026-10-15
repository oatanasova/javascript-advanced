const { expect } = require('chai');
const petAdoptionAgency = require('./03.petAdoptionAgency');

describe("petAdoptionAgency", function () {
    describe("isPetAvailable", function () {
        it("return message with valid input - vaccinated", function () {
            let tester = petAdoptionAgency.isPetAvailable("dog", 3, true);

            expect(tester).to.equal('Great! We have 3 vaccinated dog(s) available for adoption at the agency.')
        });
        it("return message with valid input - unvaccinated", function () {
            let tester = petAdoptionAgency.isPetAvailable("dog", 3, false);

            expect(tester).to.equal('Great! We have 3 dog(s) available for adoption, but they need vaccination.')
        });
        it("return message with valid input - no pets", function () {
            let tester = petAdoptionAgency.isPetAvailable("dog", 0, true);

            expect(tester).to.equal('Sorry, there are no dog(s) available for adoption at the agency.')
        });
        it("return message with valid input - no pets", function () {
            let tester = petAdoptionAgency.isPetAvailable("dog", -5, true);

            expect(tester).to.equal('Sorry, there are no dog(s) available for adoption at the agency.')
        });
        it("return an error with invalid input", function () {
            expect(() => petAdoptionAgency.isPetAvailable(['dog'], 3, true)).to.throw(Error, 'Invalid input');
            expect(() => petAdoptionAgency.isPetAvailable(123, 2, true)).to.throw(Error, 'Invalid input');
            expect(() => petAdoptionAgency.isPetAvailable('dog', '5', true)).to.throw(Error, 'Invalid input');
            expect(() => petAdoptionAgency.isPetAvailable('dog', 1, 0)).to.throw(Error, 'Invalid input');
            expect(() => petAdoptionAgency.isPetAvailable('dog', 1, 'true')).to.throw(Error, 'Invalid input');
        });
    });

    describe("getRecommendedPets", function () {
        it("return message with valid input  - 1 match", function () {
            let tester = petAdoptionAgency.getRecommendedPets([
                { name: "Buddy", traits: "friendly" },
                { name: "Luna", traits: "playful" }
            ], "friendly");

            expect(tester).to.equal('Recommended pets with the desired traits (friendly): Buddy');
        });
        it("return message with valid input - 2 matches", function () {
            let tester = petAdoptionAgency.getRecommendedPets([
                { name: "Buddy", traits: "friendly" },
                { name: "Luna", traits: "playful" },
                { name: "Scot", traits: "friendly" }
            ], "friendly");

            expect(tester).to.equal('Recommended pets with the desired traits (friendly): Buddy, Scot');
        });
        it("return message with valid input - no matches", function () {
            let tester = petAdoptionAgency.getRecommendedPets([
                { name: "Buddy", traits: "friendly" },
                { name: "Luna", traits: "playful" },
                { name: "Scot", traits: "friendly" }
            ], "scary");

            expect(tester).to.equal('Sorry, we currently have no recommended pets with the desired traits: scary.');
        });
        it("return an error with invalid input", function () {
            expect(() => petAdoptionAgency.getRecommendedPets({ name: "Buddy", traits: "friendly" }, ["scary"])).to.throw(Error, 'Invalid input');
            expect(() => petAdoptionAgency.getRecommendedPets({ name: "Buddy", traits: "friendly" }, true)).to.throw(Error, 'Invalid input');
            expect(() => petAdoptionAgency.getRecommendedPets("Buddy", 'blue')).to.throw(Error, 'Invalid input');
        });
    });

    describe("adoptPet", function () {
        it("return message with valid input", function () {
            let tester = petAdoptionAgency.adoptPet('dog', 'Sarah');

            expect(tester).to.equal('Congratulations, Sarah! You have adopted dog from the agency. Enjoy your time with your new furry friend!');
        });
        it("return an error with invalid input", function () {
            expect(() => petAdoptionAgency.adoptPet(123, 'Sarah')).to.throw(Error, 'Invalid input');
            expect(() => petAdoptionAgency.adoptPet('dog', 123)).to.throw(Error, 'Invalid input');
        });
    });
});