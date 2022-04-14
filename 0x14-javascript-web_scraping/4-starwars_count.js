#!/usr/bin/node
const request = require('request');
const url = process.argv[2];
const id = '18';
request.get(url, (err, res) => {
  if (!err) {
    const response = JSON.parse(res.body);
    const results = response.results;
    let counter = 0;

    for (let i = 0; i < results.length; i++) {
      const last = results[i].characters;

      for (let j = 0; j < last.length; j++) {
        const rest = last[j].slice(-3, -1);
        if (rest === id) { counter += 1; }
      }
    }
    console.log(counter);
  } else {
    console.error(err);
  }
});
