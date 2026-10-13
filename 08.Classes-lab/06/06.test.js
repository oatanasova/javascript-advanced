const { expect } = require('chai');
const StringBuilder = require('./06.string-builder');

//  >>>>>>    88/100

describe('StringBuilder', () => {
    describe('constructor', () => {
        it('should create an instance with a string', () => {
            const tester = new StringBuilder('hello');

            expect(tester).to.be.instanceOf(StringBuilder);
            expect(tester.toString()).to.equal('hello');
        });

        it('should create an empty instance without an argument', () => {
            const tester = new StringBuilder();

            expect(tester).to.be.instanceOf(StringBuilder);
            expect(tester.toString()).to.equal('');
        });

        it('should throw if constructor argument is not a string', () => {
            expect(() => new StringBuilder(123))
                .to.throw(TypeError, 'Argument must be a string');
            expect(() => new StringBuilder(['abc']))
                .to.throw(TypeError, 'Argument must be a string');
            expect(() => new StringBuilder(null))
                .to.throw(TypeError, 'Argument must be a string');
        });
    });

    describe('append()', () => {
        it('should append a string', () => {
            const tester = new StringBuilder('hello');

            tester.append(', there');

            expect(tester.toString()).to.equal('hello, there');
        });

        it('should append an empty instance', () => {
            const tester = new StringBuilder('');

            tester.append(', there');

            expect(tester.toString()).to.equal(', there');
        });

        it('should throw if argument is not a string', () => {
            const tester = new StringBuilder();

            expect(() => tester.append(123))
                .to.throw(TypeError, 'Argument must be a string');
            expect(() => tester.append(['abc']))
                .to.throw(TypeError, 'Argument must be a string');
            expect(() => tester.append(null))
                .to.throw(TypeError, 'Argument must be a string');
        });

        it('should throw if append argument is missing', () => {
            const tester = new StringBuilder('hello');
            expect(() => tester.append())
                .to.throw(TypeError, 'Argument must be a string');
        });
    });

    describe('prepend()', () => {
        it('should prepend a string', () => {
            const tester = new StringBuilder('hello');

            tester.prepend('User, ');

            expect(tester.toString()).to.equal('User, hello');
        });

        it('should prepend an empty instance', () => {
            const tester = new StringBuilder('');

            tester.prepend('User, ');

            expect(tester.toString()).to.equal('User, ');
        });

        it('should throw if argument is not a string', () => {
            const tester = new StringBuilder();

            expect(() => tester.prepend(123))
                .to.throw(TypeError, 'Argument must be a string');
            expect(() => tester.prepend(['abc']))
                .to.throw(TypeError, 'Argument must be a string');
            expect(() => tester.prepend(null))
                .to.throw(TypeError, 'Argument must be a string');
        });
        it('should throw if prepend argument is missing', () => {
            const tester = new StringBuilder('hello');
            expect(() => tester.prepend())
                .to.throw(TypeError, 'Argument must be a string');
        });
    });

    describe('insertAt()', () => {
        it('should insert a string at the specified index', () => {
            const tester = new StringBuilder('hello');

            tester.insertAt(' world', 5);

            expect(tester.toString()).to.equal('hello world');
        });

        it('should insert into an empty string', () => {
            const tester = new StringBuilder('');
            tester.insertAt('hello', 0);
            expect(tester.toString()).to.equal('hello');
        });

        it('should throw if argument is not a string', () => {
            const tester = new StringBuilder('hello');

            expect(() => tester.insertAt(123, 2))
                .to.throw(TypeError, 'Argument must be a string');
            expect(() => tester.insertAt(['abc'], 2))
                .to.throw(TypeError, 'Argument must be a string');
            expect(() => tester.insertAt(null, 2))
                .to.throw(TypeError, 'Argument must be a string');
        });
        
        it('should throw if insertAt string argument is missing', () => {
            const tester = new StringBuilder('hello');
            expect(() => tester.insertAt())
                .to.throw(TypeError, 'Argument must be a string');
        });

        it('should insert into the middle of a string', () => {
            const tester = new StringBuilder('hello');
            tester.insertAt('X', 2);
            expect(tester.toString()).to.equal('heXllo');
        });
    });

    describe('remove()', () => {
        it('should remove the specified number of characters', () => {
            const tester = new StringBuilder('hello world');

            tester.remove(5, 6);

            expect(tester.toString()).to.equal('hello');
        });
    });

    describe('toString()', () => {
        it('should return the stored characters as a string', () => {
            const tester = new StringBuilder('hello');

            expect(tester.toString()).to.equal('hello');
        });
    });

    describe('class structure', () => {
        it('should be an instance of StringBuilder', () => {
            const tester = new StringBuilder();

            expect(tester).to.be.instanceOf(StringBuilder);
        });

        it('should have all required methods', () => {
            const tester = new StringBuilder();

            expect(tester.append).to.be.a('function');
            expect(tester.prepend).to.be.a('function');
            expect(tester.insertAt).to.be.a('function');
            expect(tester.remove).to.be.a('function');
            expect(tester.toString).to.be.a('function');
        });
    });
});