const arr = [100, 0, 40, 0, -30];

let count = 0;
arr.forEach((number) => {
  number === 0 && count++;
});

console.log(count);
