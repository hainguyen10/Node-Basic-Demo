const add = async (a, b) => {
  return a + b;
};
const promise = add(1, 2).then((data) => {
  console.log(data);
});
console.log(promise);
