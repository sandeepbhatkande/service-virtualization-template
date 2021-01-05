const fetch = require('node-fetch');
const properties = require('./../data/AppProps.json');

function postImposter(body) {
    const url = `${properties.protocol}://${properties.url}:${properties.port}/imposters`;

    return fetch(url, {
        method:'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
}

module.exports = { postImposter };