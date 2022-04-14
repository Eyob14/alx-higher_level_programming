#!/usr/bin/node
const request = require('request');
const url = process.argv[2];
const completed = {};
request(url, (err, res) => {
  if (!err) {
    const response = JSON.parse(res.body);
    response.forEach(element => {
      if (!(element.userId in completed) && element.completed === true) {
        completed[element.userId] = 1;
      } else if (element.completed === true) {
        completed[element.userId] += 1;
      }
    });
    console.log(completed);
  } else {
    console.error(err);
  }
});
