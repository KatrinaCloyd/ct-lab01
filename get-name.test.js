const getName = require('./get-name');

describe('get name from an object', () => {
    it('takes in an object and returns the name', () => {
        const something = getName({ name: 'spot', age: 5, weight: '20 lbs' });
        expect(something).toEqual('spot');
    });

    it('takes in an object and returns the name', () => {
        const something = getName({ _id: '5cf5679a915ecad153ab68c9', name: 'Aang' });
        expect(something).toEqual('Aang');
    });

});
