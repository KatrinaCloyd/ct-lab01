const fetchQuote = require('./fetch-quote');

describe('get object for random quote from futurama API', () => {
    it('hit futurama API and get object with random quote text, name, and image', async () => {
        const expected = {
            name: expect.any(String),
            text: expect.any(String),
            image: expect.any(String)
        };
        const newQuote = await fetchQuote();
        expect(newQuote).toEqual(expected);
    });

});
