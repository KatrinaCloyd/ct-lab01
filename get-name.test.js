const getName = require('./get-name');

describe('get name from an object', () => {
    it('takes in an object and returns the name', () => {
        const something = getName();
        expect(something).toEqual('name');

    });
});
