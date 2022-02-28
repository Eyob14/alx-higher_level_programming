#!/usr/bin/node
const number = process.argv;
if (number.length === 2 || number.length === 3) {
  console.log(0);
} else {
  const numbers = number.slice(2);
  numbers.sort();
  console.log(numbers[numbers.length - 2]);
}
