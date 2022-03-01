#!/usr/bin/node
const rectangle = require('./4-rectangle.js');
module.exports = class Square extends rectangle {
  constructor (size) {
    super(size, size);
  }
};
