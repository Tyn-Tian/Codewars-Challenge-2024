function getSum(a, b) {
  let total = 0;
  if (a == b) {
    return a;
  }

  if (a > b) {
    total = b;
    for (let i = b; i < a; i++) {
      total += i + 1;
    }
  } else {
    total = a;
    for (let i = a; i < b; i++) {
      total += i + 1;
    }
  }
  return total;
}

// Top answer sort by best practice
// const GetSum = (a, b) => {
//   let min = Math.min(a, b),
//       max = Math.max(a, b);
//   return (max - min + 1) * (min + max) / 2;
// }

console.log(getSum(0, -1));
console.log(getSum(0, 1));
