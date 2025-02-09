const { nums, words } = require("./data/data.js");

// Every -----------------------------------
const isEveryNumGreaterThan2 = (numbers) => {
  return numbers.every((num) => num > 2);
};

console.log(isEveryNumGreaterThan2(nums));

// -----------------------------------

const isEveryWordShorterThan7 = () => {
  //
  return words.every((word) => word.length < 7);
};

console.log(isEveryWordShorterThan7(words));

// Filter -----------------------------------

const arrayLessThan5 = (numbers) => {
  // 
  return numbers.filter((num) => num < 5);
};

const newArry = arrayLessThan5(nums);
console.log(newArry);

// -----------------------------------

const arrayOddLengthWords = (words) => {
  return words.filter((word) => word.length % 2 !== 0);
};
const oddLengthWords = arrayOddLengthWords(words);

console.log(oddLengthWords);

// Find -----------------------------------

const firstValDivisibleBy4 = (num) => {
  //
  return nums.find((num) => num % 4 === 0);
};

console.log(firstValDivisibleBy4())

// -----------------------------------

const firstWordLongerThan4Char = (words) => {
  return words.find((word) => word.length > 4);
};

console.log(firstWordLongerThan4Char(words));

// Find Index

const firstNumIndexDivisibleBy3 = () => {
  return nums.findIndex((num) => num % 3 === 0);
};

console.log(firstNumIndexDivisibleBy3()); 


const firstWordIndexLessThan2Char = () => {
  return words.findIndex((word) => word.length < 2);
};

console.log(firstWordIndexLessThan2Char()); 

// For Each

const logValuesTimes3 = () => {
  //
  nums.forEach((num) => {
    console.log(num * 3);
  });
};

const logWordsWithExclamation = () => {
  //
  words.forEach((word) => {
    console.log(word + '!');
  });
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  //
   return nums.map((num, index) => num * num * index);
};

console.log(arrayValuesSquaredTimesIndex());

const arrayWordsUpcased = (words) => {
  //
  return words.map((word) => word.toUpperCase());
};

console.log(arrayWordsUpcased)

// Some

const areSomeNumsDivisibleBy7 = () => {
  //
  return nums.some((num) => num % 7 === 0)
};
console.log(areSomeNumsDivisibleBy7())

const doSomeWordsHaveAnA = () => {
  return words.some((word) => word.includes("a") || word.includes("A"));
};

console.log(doSomeWordsHaveAnA());

module.exports = {
  isEveryNumGreaterThan2,
  isEveryWordShorterThan7,
  arrayLessThan5,
  arrayOddLengthWords,
  firstValDivisibleBy4,
  firstWordLongerThan4Char,
  firstNumIndexDivisibleBy3,
  firstWordIndexLessThan2Char,
  logValuesTimes3,
  logWordsWithExclamation,
  arrayValuesSquaredTimesIndex,
  arrayWordsUpcased,
  areSomeNumsDivisibleBy7,
  doSomeWordsHaveAnA,
};
