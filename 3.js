function makeNegative(num) {
    return num <= 0 ? num : num * -1;
}

// Top Answer sort by Best Practices
// function makeNegative(num) {
//     return -Math.abs(num)
// }

console.log(makeNegative(1))
console.log(makeNegative(-5))
console.log(makeNegative(0))
console.log(makeNegative(0.12))