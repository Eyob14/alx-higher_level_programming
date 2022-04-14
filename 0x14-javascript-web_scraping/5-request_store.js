#!/usr/bin/node
const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const path = process.argv[3];
request(url, 'utf-8', (err, res) => {
  if (err) { 
    console.error(err);
  }
  else {
    fs.writeFile(path, res.body, err => {
      if (err) {
        console.error(err);
        return;
      }
    });
  }
});
