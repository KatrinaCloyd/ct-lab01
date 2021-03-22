const copyAndPush = require('./copy-and-push');

describe('return new array with added item', () => {
    it('copies given array with new value added to end', () => {
        const something = copyAndPush([1, 2, 3]);
        expect(something).toEqual([1, 2, 3, 4]);
    });

});
