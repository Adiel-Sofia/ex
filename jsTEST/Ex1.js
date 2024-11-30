const num = 4;
//((num%5===0 && num%2!==0 && num%3!==0) || (num%5!==0 && num%2===0 && num%3!==0) || (num%5!==0 && num%2!==0 && num%3===0)) && console.log('1');

const a = 2;
const b = 3;
const c = 5;
(num % a === 0) ^ (num % b === 0) ^ (num % c === 0) && console.log("1");
