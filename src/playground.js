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
const interval = setInterval(() => {
  console.log("I will print every 2 seconds");
}, 2000);

setTimeout(() => {
  clearInterval(interval);
}, 10000);
