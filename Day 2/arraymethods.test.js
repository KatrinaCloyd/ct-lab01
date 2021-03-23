const map = require('./map');
const filter = require('./filter');

describe('map function', () => {
    it('maps over array uses given callback and returns new array of same length', () => {
        const newArr = map([2, 3, 4], (n) => n * 2);
        expect(newArr).toEqual([4, 6, 8]);
        expect(newArr.length).toEqual(3);
    });
});

describe('filter function', () => {
    it('filters an array uses given callback and returns new array of truthy elements', () => {
        const newArr = filter([2, 3, 4], (n) => n % 2 === 0);
        expect(newArr).toEqual([2, 4]);
    });
});
