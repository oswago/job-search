/*
export const evenOdd = (number) => {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};
export const multiply = (a, b) => {
  var res = a * b;
  return res;
};
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((number) => {
  number * number;
});
console.log(squares);

const favouriteFood = "sushi";
const goodFoods = {
  [favouriteFood]: true,
};
console.log(goodFoods);
*/
/*
const interval = setInterval(() => {
  console.log("I will print every 2 seconds");
}, 2000);

setTimeout(() => {
  clearInterval(interval);
}, 10000);
*/
/*
const axios = require("axios");
const url = "http://localhost:3000/jobs";

const fetchJobsV1 = () => {
  axios.get(url).then((response) => {
    console.log(response.data);
  });
};

const fetchJobsv2 = async () => {
  const response = await axios.get(url);
  console.log(response.data);
};

fetchJobsv2();
fetchJobsV1();
*/
/*
const sushi = [
  "Tuna",
  "Salmon",
  "Yellowtail",
  "Eel",
  "Shrimp",
  "Octopus",
  "Uni",
];
console.log(sushi.slice(2, 6));
*/

//set is unique
//no order
/*const number = new Set();
number.add(5);
number.add(10);
number.add(15);
number.add(5);

console.log(number);
"*/
/*
const numbers = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 14, 17, 20];
console.log(numbers.filter((number) => number > 6));
const jobs = [
  { title: "Angular Developer", organization: "Microsoft" },
  { title: "Programmmer", organization: "Googlet" },
  { title: "Developer", organization: "Microsoft" },
];

jobs.filter((job) => job.organization === "Microsoft");
*/
const { ref } = require("vue");

let a = ref(1);
let b = ref(2);

//{value:1}
let c = b + a;
console.log(c);
