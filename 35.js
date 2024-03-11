function countBits(n) {
  let bit = "";
  let step = 0;
  let number = n;
  while (number != 0) {
    step = Math.floor(number / 2);
    bit += `${number % 2}`;
    number = step;
  }

  return bit
    .split("")
    .reverse()
    .filter((n) => n == "1").length;
}

// Top answer sort by best pratice
// function countBits (n) {
//     return n.toString(2).split('0').join('').length;
// }

console.log(countBits(0));
console.log(countBits(4));
console.log(countBits(7));
console.log(countBits(9));
console.log(countBits(10));
