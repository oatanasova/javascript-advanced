let expect = require('chai').expect;
let artGallery = require('./artGallery');

describe("Art Gallery", function () {
    describe("addArtwork ", function () {
        it("return a message with valid input", function () {
            const tester = artGallery.addArtwork('Starry Night', '30 x 40', 'Van Gogh');

            expect(tester).to.equal(`Artwork added successfully: 'Starry Night' by Van Gogh with dimensions 30 x 40.`)
        });
        it("return an error for invalid title", function () {
            expect(() => artGallery.addArtwork(['Starry Night'], '30 x 40', 'Van Gogh')).to.throw(Error, 'Invalid Information!');
            expect(() => artGallery.addArtwork(123, '30 x 40', 'Van Gogh')).to.throw(Error, 'Invalid Information!');
        });
        it("return an error for invalid artist", function () {
            expect(() => artGallery.addArtwork('Starry Night', '30 x 40', 123)).to.throw(Error, 'Invalid Information!');
            expect(() => artGallery.addArtwork('Starry Night', '30 x 40', ['Van Gogh'])).to.throw(Error, 'Invalid Information!');
            expect(() => artGallery.addArtwork('Starry Night', '30 x 40', 'Bat Gogh')).to.throw(Error, 'This artist is not allowed in the gallery!');
        });
        it("return an error for invalid dimentions", function () {
            expect(() => artGallery.addArtwork('Starry Night', '30x 40', 'Van Gogh')).to.throw(Error, 'Invalid Dimensions!');
            expect(() => artGallery.addArtwork('Starry Night', '-30 x 40', 'Van Gogh')).to.throw(Error, 'Invalid Dimensions!');
            expect(() => artGallery.addArtwork('Starry Night', '30 x -40', 'Van Gogh')).to.throw(Error, 'Invalid Dimensions!');
            expect(() => artGallery.addArtwork('Starry Night', 'bb x 40', 'Van Gogh')).to.throw(Error, 'Invalid Dimensions!');
            expect(() => artGallery.addArtwork('Starry Night', '30 x bb', 'Van Gogh')).to.throw(Error, 'Invalid Dimensions!');
            expect(() => artGallery.addArtwork('Starry Night', '30x40', 'Van Gogh')).to.throw(Error, 'Invalid Dimensions!');
            expect(() => artGallery.addArtwork('Starry Night', 30, 'Van Gogh')).to.throw(Error, 'Invalid Dimensions!');
        });
    });

    describe("calculateCosts ", function () {
        it("return a message with valid input and sponsor", function () {
            const tester = artGallery.calculateCosts(200, 50, true);

            expect(tester).to.equal(`Exhibition and insurance costs are 225$, reduced by 10% with the help of a donation from your sponsor.`)
        });
        it("return a message with valid input and no sponsor", function () {
            const tester = artGallery.calculateCosts(200, 50, false);

            expect(tester).to.equal(`Exhibition and insurance costs are 250$.`)
        });
        it("return an error for invalid cost", function () {
            expect(() => artGallery.calculateCosts('200', 50, true)).to.throw(Error, 'Invalid Information!');
            expect(() => artGallery.calculateCosts([200], 50, true)).to.throw(Error, 'Invalid Information!');
            expect(() => artGallery.calculateCosts(-200, 50, true)).to.throw(Error, 'Invalid Information!');
        });
        it("return an error for invalid insurance", function () {
            expect(() => artGallery.calculateCosts(200, '50', true)).to.throw(Error, 'Invalid Information!');
            expect(() => artGallery.calculateCosts(200, [50], true)).to.throw(Error, 'Invalid Information!');
            expect(() => artGallery.calculateCosts(200, -50, true)).to.throw(Error, 'Invalid Information!');
        });
        it("return an error for invalid sponsor", function () {
            expect(() => artGallery.calculateCosts(200, 50, 'true')).to.throw(Error, 'Invalid Information!');
            expect(() => artGallery.calculateCosts(200, 50, 0)).to.throw(Error, 'Invalid Information!');
        });
    });

    describe("calculateCosts ", function () {
        it("return a message with valid input with under 5 artworks per space", function () {
            const tester = artGallery.organizeExhibits(24, 4);

            expect(tester).to.equal(`You have 4 display spaces with 6 artworks in each space.`)
        });
        it("return a message with valid input with over 5 artworks per space", function () {
            const tester = artGallery.organizeExhibits(12, 4)

            expect(tester).to.equal('There are only 3 artworks in each display space, you can add more artworks.')
        });
        it("returns a message when there are exactly 5 artworks per space", function () {
            const tester = artGallery.organizeExhibits(20, 4);

            expect(tester).to.equal("You have 4 display spaces with 5 artworks in each space.");
        });
        it("return an error for invalid input", function () {
            expect(() => artGallery.organizeExhibits('24', 4)).to.throw(Error, 'Invalid Information!');
            expect(() => artGallery.organizeExhibits(24, '4')).to.throw(Error, 'Invalid Information!');
            expect(() => artGallery.organizeExhibits(24, 0)).to.throw(Error, 'Invalid Information!');
            expect(() => artGallery.organizeExhibits(0, 4)).to.throw(Error, 'Invalid Information!');
            expect(() => artGallery.organizeExhibits(-24, 4)).to.throw(Error, 'Invalid Information!');
            expect(() => artGallery.organizeExhibits(24, -4)).to.throw(Error, 'Invalid Information!');
        });
    });
});
