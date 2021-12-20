// setTimeout(() => {
//   console.log("Hello World");
// }, 0);
// function add(a, b) {
//   console.log(a + b);
// }
// setTimeout(add, 1000, 1, 2);
setImmediate(() => {
  console.log("immediate is getting called");
});
setTimeout(
  (a, b) => {
    console.log(a + b);
  },
  0,
  1,
  2
);
console.log("done");
