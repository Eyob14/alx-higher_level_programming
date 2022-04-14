#!/usr/bin/node
const request = require('request');
const id = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${id}`;
request(url, (err, res) => {
  if (err) {
    console.error(err);
  } else {
    const characters = JSON.parse(res.body).characters;
    characters.forEach(characterUrl => {
      request(characterUrl, (err, res) => {
        if (err) {
          console.error(err);
        } else {
          const characterName = JSON.parse(res.body).name;
          console.log(characterName);
        }
      });
    });
  }
});
