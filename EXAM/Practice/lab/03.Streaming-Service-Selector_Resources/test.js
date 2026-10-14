const { expect } = require('chai');
const streamingServiceSelector = require('./streamingServiceSelectors');

describe("Streaming Service Selector", function () {
    describe("selectingContent", function () {
        it("returns a message for a Movie", function () {
            const tester = streamingServiceSelector.selectingContent('Movie', 'HBO', 'Action');

            expect(tester).to.equal('You can watch this Action Movie on HBO. Enjoy your Action-filled experience!');
        });

        it("returns a message for a TV Show", function () {
            const tester = streamingServiceSelector.selectingContent('TV Show', 'Netflix', 'Comedy');

            expect(tester).to.equal('You can watch this Comedy TV Show on Netflix. Enjoy your Comedy-filled experience!');
        });

        it("returns an error if not Movie or TV Show", function () {
            expect(() => streamingServiceSelector.selectingContent('Kino', 'HBO', 'Comedy'))
                .to.throw(Error, "We currently only support 'Movie' or 'TV Show' types.");
        });

        it("returns an error if not supported genre", function () {
            expect(() => streamingServiceSelector.selectingContent('Movie', 'HBO', 'RomCom'))
                .to.throw(Error, "We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi.");
        });
    });

    describe("availablePlatforms", function () {

    });



});
