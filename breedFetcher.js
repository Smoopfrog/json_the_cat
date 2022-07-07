const request = require('request');
const argv = process.argv.slice(2);
const breed = argv[0];
const requestedURL = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;


request(requestedURL, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`Cat breed '${breed}' does not exist.`);
    } else {
      console.log(data[0].description);
    }
  }
});