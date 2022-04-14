#!/usr/bin/node
const fs = require('fs');
const file = process.argv[2];
const word = process.argv[3];
if (file && word) {
  fs.writeFile(file, word, 'utf-8', err => {
    if (err) {
      console.error(err);
    }
  });
} else {
  throw new Error('Enter a content to write');
}
