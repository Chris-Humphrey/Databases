let axios = require('axios');
// let rp = require('request-promise');

var urls = [ 
    'https://en.wikipedia.org/wiki/Futures_and_promises',
    'https://en.wikipedia.org/wiki/Continuation-passing_style',
    'https://en.wikipedia.org/wiki/JavaScript',
    'https://en.wikipedia.org/wiki/Node.js',
    'https://en.wikipedia.org/wiki/Google_Chrome'
    ];

    let p1 = axios.get(urls[0]);
    let p2 = axios.get(urls[1]);
    let p3 = axios.get(urls[2]);
    let p4 = axios.get(urls[3]);
    let p5 = axios.get(urls[4]);
    

Promise.all([p1, p2, p3, p4, p5])
.then((responses) => {
    console.log(responses[0]);
    console.log(responses[1]);
    console.log(responses[2]);
    console.log(responses[3]);
    console.log(responses[4]);
    return ('success!')
})
.then((results) => {
    console.log(results);
})
.catch((errors) => {
    console.log(errors[0]);
    console.log(errors[1]);
    console.log(errors[2]);
    console.log(errors[3]);
    console.log(errors[4]);
})