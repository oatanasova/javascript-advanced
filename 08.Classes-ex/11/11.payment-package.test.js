const { expect } = require('chai');
const PaymentPackage = require('./11.payment-package');

describe("PaymentPackage", function () {
    //
    describe("", function () {
        it("", function () {
            const tester = new PaymentPackage('HR Services', 1500);

            expect(tester).to.be.instanceOf(PaymentPackage);
            expect(tester.toString()).to.equal(['Package: HR Services',
                '- Value (excl. VAT): 1500',
                '- Value (VAT 20%): 1800']);
        });
        // TODO: …
    });


});
