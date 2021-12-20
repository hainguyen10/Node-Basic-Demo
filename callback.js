const add = (a, b) => {
  return a + b;
};
const print = (f, numb1, numb2) => {
  const sum = f(numb1, numb2);
  console.log("The sum = " + sum);
};
print(add, 1, 2);
