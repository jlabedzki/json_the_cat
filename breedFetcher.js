const request = require('request');

const fetchBreedDescription = (breedName, cb) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, resp, body) => {
    const data = JSON.parse(body);

    if (error) {
      return cb(error);
    }
    if (resp.statusCode !== 200) {
      return cb(`Status code: ${resp.statusCode} - Status message: ${resp.statusMessage}`);
    }
    if (data.length === 0) {
      return cb(`Breed data not found! Check your spelling :)`);
    }
    const desc = data[0].description;

    return cb(error, desc);
  });

};

module.exports = { fetchBreedDescription };
