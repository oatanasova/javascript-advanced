const { expect } = require('chai');
const streamingServiceSelector = require('./streamingServiceSelector');

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

        it("returns an error with invalid type and valid genre", function () {
            expect(() => streamingServiceSelector.selectingContent('Kino', 'HBO', 'Comedy'))
                .to.throw(Error, "We currently only support 'Movie' or 'TV Show' types.");
        });

        it("returns an error with valid type and invalid genre", function () {
            expect(() => streamingServiceSelector.selectingContent('Movie', 'HBO', 'RomCom'))
                .to.throw(Error, "We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi.");
        });
    });

    describe("availablePlatforms", function () {
        it('returns a message with valid array and index', function () {
            const tester = streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], 0);

            expect(tester).to.equal('Other available platforms are: HBO, Disney+.');
        });

        it("throws an error if platforms is not an array", function () {
            expect(() => streamingServiceSelector.availablePlatforms('Netflix', 0))
                .to.throw(Error, "Invalid platform selection.");
        });

        it("throws an error if index is invalid", function () {
            expect(() => streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], 5))
                .to.throw(Error, "Invalid platform selection.");
        });

        it("throws an error if index is negative", function () {
            expect(() => streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], -1))
                .to.throw(Error, "Invalid platform selection.");
        });

    });
    describe('contentRating', function () {
        it('return valid runtime and low view rating', function () {
            const tester = streamingServiceSelector.contentRating(162, 4);

            expect(tester).to.equal('This content has a lower rating (4/10) and runs for 2.70 hours. You might want to check reviews first.')
        });

        it('return valid runtime and high view rating', function () {
            const tester = streamingServiceSelector.contentRating(120, 9);

            expect(tester).to.equal('This content is highly rated (9/10) and has a runtime of 2.00 hours. Enjoy your watch!')
        });

        it('return valid runtime and 7 view rating', function () {
            const tester = streamingServiceSelector.contentRating(75, 7);

            expect(tester).to.equal('This content is highly rated (7/10) and has a runtime of 1.25 hours. Enjoy your watch!')
        });

        it('return invalid runtime and view rating', function () {
            expect(() => streamingServiceSelector.contentRating('boobs', 7)).to.throw(Error, 'Invalid runtime or rating.');
            expect(() => streamingServiceSelector.contentRating(-50, 7)).to.throw(Error, 'Invalid runtime or rating.');
            expect(() => streamingServiceSelector.contentRating(75, 'abc')).to.throw(Error, 'Invalid runtime or rating.');
            expect(() => streamingServiceSelector.contentRating(75, -9999)).to.throw(Error, 'Invalid runtime or rating.');
            expect(() => streamingServiceSelector.contentRating(75, 11)).to.throw(Error, 'Invalid runtime or rating.');
        });

        it('returns an error for runtime 0', function () {
            expect(() => streamingServiceSelector.contentRating(0, 7)).to.throw(Error, 'Invalid runtime or rating.');
        });

        it('returns a lower rating message for viewer rating 0', function () {
            const tester = streamingServiceSelector.contentRating(120, 0);

            expect(tester).to.equal('This content has a lower rating (0/10) and runs for 2.00 hours. You might want to check reviews first.');
        });

    });
});