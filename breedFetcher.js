const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  // Set url
  const requestedURL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  if (breedName === undefined) {
    return callback("Breed name is undefined", null);
  }

  // Request
  request(requestedURL, (error, response, body) => {
    
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      
      if (data.length === 0) {
        callback(`Cat breed '${breedName}' does not exist.`, null);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };