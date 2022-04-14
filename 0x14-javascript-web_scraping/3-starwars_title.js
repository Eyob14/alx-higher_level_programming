#!/usr/bin/node
const request = require('request');
const id = parseInt(process.argv[2]);
const url = `https://swapi-api.hbtn.io/api/films/${id}`;
request.get(url, (err, res) => {
  if (err) {
    console.error(err);
  }
  const response = JSON.parse(res.body);
  console.log(response.title);
});
