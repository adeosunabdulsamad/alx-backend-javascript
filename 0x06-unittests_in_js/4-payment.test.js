const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
    let consoleSpy, stub;

    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
        stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    });

    afterEach(() => {
        consoleSpy.restore();
        stub.restore();
    });

    it('should stub Utils.calculateNumber to return 10', function () {
        sendPaymentRequestToApi(100, 20);

        expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
    });
});
