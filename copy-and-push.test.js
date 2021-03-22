const copyAndPush = require('./copy-and-push');

describe('return new array with added item', () => {
    it('copies given array with new value added to end', () => {
        const originalArr = [1, 2, 3];
        const newArr = copyAndPush(originalArr);
        expect(newArr).toEqual([1, 2, 3, 4]);
        expect(originalArr).toEqual([1, 2, 3]);
    });

});
