const fetch = require('node-fetch');

const fetchQuote = async () => {
    const response = await fetch('http://futuramaapi.herokuapp.com/api/quotes/1');
    const body = await response.json();

    const quote = {
        name: body[0].character,
        text: body[0].quote,
        image: body[0].image
    };

    return quote;
};

module.exports = fetchQuote;
