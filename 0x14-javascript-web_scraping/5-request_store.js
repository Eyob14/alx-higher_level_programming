#!/usr/bin/node
const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const path = process.argv[3];
request(url, (err, res) => {
  if (!err) {
    fs.writeFile(path, res.body, 'utf-8', err => {
      if (err) {
        console.error(err);
      }
    });
  }
  else {
    console.error(err);
  }
});
