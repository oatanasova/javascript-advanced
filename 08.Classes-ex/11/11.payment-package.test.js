const { expect } = require('chai');
const PaymentPackage = require('./11.payment-package');

describe("PaymentPackage", function () {

    describe("can be instantiated", function () {
        it("with two parameters - string and number", function () {
            const tester = new PaymentPackage('HR Services', 1500);

            expect(tester.name).to.equal('HR Services');
            expect(tester.value).to.equal(1500);
        });
    });

    describe('accessor name', function () {
        it("with two parameters - empty string and number", function () {
            expect(() => new PaymentPackage('', 1500))
                .to.throw(Error, 'Name must be a non-empty string');
        });
        it("with two parameters - non-string and number", function () {
            expect(() => new PaymentPackage(123, 1500))
                .to.throw(Error, 'Name must be a non-empty string');
        });
        it("throws when assigning an empty name", function () {
            const tester = new PaymentPackage('HR Services', 1500);

            expect(() => tester.name = '')
                .to.throw(Error, 'Name must be a non-empty string');
        });
        it("throws when assigning a non-string name", function () {
            const tester = new PaymentPackage('HR Services', 1500);

            expect(() => tester.name = 123)
                .to.throw(Error, 'Name must be a non-empty string');
        });
    });

    describe('accessor value', function () {
        it("with two parameters - string and non-number", function () {
            expect(() => new PaymentPackage('HR Services', '1500'))
                .to.throw(Error, 'Value must be a non-negative number');
        });
        it("with two parameters - string and negative number", function () {
            expect(() => new PaymentPackage('HR Services', -500))
                .to.throw(Error, 'Value must be a non-negative number');

        });
        it("throws when assigning a negative value", function () {
            const tester = new PaymentPackage('HR Services', 1500);

            expect(() => tester.value = -500)
                .to.throw(Error, 'Value must be a non-negative number');
        });
        it("throws when assigning a non-number value", function () {
            const tester = new PaymentPackage('HR Services', 1500);

            expect(() => tester.value = '500')
                .to.throw(Error, 'Value must be a non-negative number');
        });
        it("accepts zero as a value", function () {
            const tester = new PaymentPackage('HR Services', 1500);
            tester.value = 0;

            expect(tester.value).to.equal(0);
        });
    });

    describe('accessor VAT', function () {
        it("when assigning negative value", function () {
            const tester = new PaymentPackage('HR Services', 1500);

            expect(() => tester.VAT = -500)
                .to.throw(Error, 'VAT must be a non-negative number');
        });
        it("when assigning non-number value", function () {
            const tester = new PaymentPackage('HR Services', 1500);

            expect(() => tester.VAT = '123')
                .to.throw(Error, 'VAT must be a non-negative number');
        });
        it("accepts a valid VAT value", function () {
            const tester = new PaymentPackage('HR Services', 1500);
            tester.VAT = 10;

            expect(tester.VAT).to.equal(10);
        });
    });

    describe('accessor active', function () {
        it("when assigning non-boolean value", function () {
            const tester = new PaymentPackage('HR Services', 1500);

            expect(() => tester.active = 'abc')
                .to.throw(Error, 'Active status must be a boolean');
        });
        it("accepts a boolean value", function () {
            const tester = new PaymentPackage('HR Services', 1500);
            tester.active = false;

            expect(tester.active).to.equal(false);
        });

        it("has active set to true by default", function () {
            const tester = new PaymentPackage('HR Services', 1500);

            expect(tester.active).to.equal(true);
        });
    });

    describe('toString', function () {
        it("returns the package details - active", function () {
            const tester = new PaymentPackage('HR Services', 1500);

            expect(tester.toString()).to.equal(
                'Package: HR Services\n' +
                '- Value (excl. VAT): 1500\n' +
                '- Value (VAT 20%): 1800'
            );
        });

        it("returns the package details - inactive", function () {
            const tester = new PaymentPackage('HR Services', 1500);
            tester.active = false;

            expect(tester.toString()).to.equal(
                'Package: HR Services (inactive)\n' +
                '- Value (excl. VAT): 1500\n' +
                '- Value (VAT 20%): 1800'
            );
        });
    });
    
});
