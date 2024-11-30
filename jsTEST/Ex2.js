const num = 237;

function isPrime(num) {
  let flag = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let i = 2; i < 237; i++) {
  isPrime(i) && console.log(i);
}
