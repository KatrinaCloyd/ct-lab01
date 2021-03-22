const copyAndFilter = require('./cap-and-filter');

describe('capitalize and filter all strings in array', () => {
    it('capitalize all strings and filter out any starting with F', () => {
        const originalArr = ['cookie', 'fudge', 'cake', 'pie'];
        const newArr = copyAndFilter(originalArr);
        expect(newArr).toEqual(['COOKIE', 'CAKE', 'PIE']);
    });

});
