function squareSum(numbers) {
  return numbers.reduce((acc, n) => acc + n ** 2, 0);
}

console.log(squareSum([1, 2]));
console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum([]));
