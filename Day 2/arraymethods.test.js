const map = require('./map');
const filter = require('./filter');
const findIndex = require('./findIndex');
const reduce = require('./reduce');
const every = require('./every');
const forEach = require('./forEach');

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

describe('find index function', () => {
    it('returns index of first truthy element, or -1 if no truthy elements', () => {
        const newArr = findIndex([2, 3, 4], (n) => n % 2 === 0);
        const secondArr = findIndex([1, 3, 4, 5, 6], (n) => n % 2 === 0);
        const thirdArr = findIndex([1, 3, 13], (n) => n % 2 === 0);
        expect(newArr).toEqual(0);
        expect(secondArr).toEqual(2);
        expect(thirdArr).toEqual(-1);
    });
});

describe('reduce function', () => {
    it('reduces an array uses given callback and returns new array of truthy elements', () => {
        const newArr = reduce([2, 3, 4], (acc, n) => acc + n);
        const secondArr = reduce([2, 3, 4], (acc, n) => acc + n, 5);
        expect(newArr).toEqual(9);
        expect(secondArr).toEqual(14);
    });
});

describe('every function', () => {
    it('returns true if all elements are true, or false if any one element is false', () => {
        const newArr = every([2, 3, 4], (n) => n % 2 === 0);
        const secondArr = every([7, 3, 9, 1], (n) => n % 2 === 0);
        const thirdArr = every([2, 4, 6, 8], (n) => n % 2 === 0);
        expect(newArr).toEqual(false);
        expect(secondArr).toEqual(false);
        expect(thirdArr).toEqual(true);
    });
});

describe('every function', () => {
    it('returns true if all elements are true, or false if any one element is false', () => {
        const mockCallback = jest.fn(n => n * 2);
        forEach([2, 3], mockCallback);
        expect(mockCallback).toHaveBeenCalledTimes(2);
    });
});
