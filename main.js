//create methods in JavaScript

//function keyword (es5)
// function add(a, b) {
//   return a + b;
// }
//anon function
// const add = function (a, b) {
//   return a + b;
// };
//arrow function, most common ways to write a function in JavaScripts es6
const add = (a, b) => {
  return a + b;
};
const sum = add(1, 2);
console.log("The sum is = " + sum);
