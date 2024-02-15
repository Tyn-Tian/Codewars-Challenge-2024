function digitalRoot(n) {
    const toInteger = n.toString().split('').map(n => parseInt(n))
    const result = toInteger.reduce((acc, a) => acc + a)
    return (result < 10) ? result : digitalRoot(result)  
}

// Top answer sort by best practice
// function digitalRoot(n) {
//     return (n - 1) % 9 + 1;
// }

console.log(digitalRoot(16));
console.log(digitalRoot(456));