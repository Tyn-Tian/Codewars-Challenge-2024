function positiveSum(arr) {
  return arr.filter((n) => n > 0).reduce((acc, n) => acc + n, 0);
}

console.log(positiveSum([1, -4, 7, 12]));
console.log(positiveSum([0, -5, -3, -4]));
