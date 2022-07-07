const { fetchBreedDescription } = require('./breedFetcher');
const argv = process.argv.slice(2);

const breedName = argv[0];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});