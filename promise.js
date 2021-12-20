const add = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a > 0 && b > 0) {
      resolve(a + b);
    } else if (a < 0 || b < 0) {
      reject("Cannot add negative numbers");
    }
  });
};
add(1, -2)
  .then((data) => {
    console.log(data);
  })
  .catch((rejection) => console.log(rejection));
//console.log(add(1, 2));
