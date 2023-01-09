var numbers = [3, 56, 2, 5, 48];

//Map -Create a new array by doing something with each item in an array.
// function double(x) {
//   return x * 2;
// }
// const newNumbers = numbers.map(double);

const mapNumbers = numbers.map(function (x) {
  return x * 2;
});
//console.log("Map -> " + mapNumbers);

//Filter - Create a new array by keeping the items that return true.
const filNumbers = numbers.filter(function (num) {
  return num > 10;
});
//console.log("Filter -> " + filNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
const redNum = numbers.reduce(function (accumilator, Currentnumb) {
  return accumilator + Currentnumb;
});
//console.log("Reduce -> " + redNum);

//Find - find the first item that matches from an array.
const findNum = numbers.find(function (finNum) {
  return finNum > 10;
});
//console.log("Find -> " + findNum);

//FindIndex - find the index of the first item that matches.
const findInNum = numbers.findIndex(function (finINum) {
  return finINum === 5;
});
//console.log("FindIndex -> " + findInNum);

import emojipedia from "./emojipedia";

const findEmoj = emojipedia.map(function (entry) {
  return entry.meaning.substring(0, 100);
});

console.log(findEmoj);
