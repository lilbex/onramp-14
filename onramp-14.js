// Pracice using the push() method of arrays

// write a function that returns prime factors of a given number

// 20 => 2 * 2 * 5
// 10 => 2 * 5
// 9  => 3 * 3

// 20 % 2 === 0
// 20 / 2 = 10 r 0
// 15 % 4 === 3
// 15 / 4 = 3 r 3
// A prime number is a number that is only divisible by itself and 1

const primeFactors = (num) => {
  let result = [];
  let number = num;
  let divider = 2;
  while (number > 1) {
    if (number % divider === 0) {
      result.push(divider);
      number = number / divider;
    } else {
      divider++;
    }
  }
  let format = result.join(" * ");
  return `the prime factors of ${num} are ${format}`;
};
console.log(primeFactors(18));
// practice using indexOf() method of arrays
// Find the target number in the array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let newArr = [4, 5, 8, 1, 3, 5, 7, 9, 2, 10];
let target = "c";

const findTarget = (arr, target) => {
  let myArr = arr;
  return myArr.indexOf(target);
};

// return index of all the target numbers in the array

const indexOfAll = (arr, target) => {
  let myArr = arr;
  let result = [];
  let index = myArr.indexOf(target);
  while (index !== -1) {
    result.push(index);
    index = myArr.indexOf(target, index + 1);
  }
  return result;
};

// console.log(indexOfAll(newArr, target));

// practice filter() method of arrays
// A callback is a function passed as an argument to another function.

let newObj = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jack", age: 35 },
  { name: "Jill", age: 40 },
  { name: "Joe", age: 45 },
  { name: "Jen", age: 50 },
];


const filterAge = (arr, age) => {
  return arr.filter((person) => person.age >= age);
};



// return only figures in the array
let chukwuebukaArr = [3, 7, 9, "sir", "me"];
const filterFigures = (arr) => {
  return arr.filter((item) =>typeof item === "number");
}

// practice using the sort() method of arrays

let nameArr = ["Shittu", "Jane", "Alexander",  "Chukwuma", "Zenab"];

const sortArr =(arr)=>{
  return arr.sort()
}

console.log(sortArr(nameArr))

// practice using the reduce() method of arrays

const addNums = (arr) => {
  return arr.reduce((acc, curr) => acc + curr);
}

// find secondLargeNum in an array
let shittuArr = [4, 5, 8, 1, 3, 5, 7, 9, 2, 10];

function secondLargeNum (arr) {
  const s = arr.sort(function(a,b){
    return a-b
  })
  return s[s.length-2]
};

