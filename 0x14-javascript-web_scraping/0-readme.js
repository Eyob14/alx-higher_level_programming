#!/usr/bin/node
const fs = require('fs');
const arg = process.argv[2];
if (arg) {
  fs.readFile(arg, 'utf8', (err, data) => {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });
}
