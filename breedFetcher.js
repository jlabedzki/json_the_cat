const request = require('request');

const breedName = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, resp, body) => {
  if (error) {
    console.log('Error:', error); // Print the error if one occurred
    return;
  }

  if (resp.statusCode !== 200) {
    console.log(`Status code: ${resp.statusCode} \nStatus message: ${resp.statusMessage}`);
    return;
  }
  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log(`Breed data not found!`);
    return;
  }

  console.log(data[0].description);

});