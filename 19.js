function arrayDiff(a, b) {
    return a.filter(a => !b.includes(a))
}

console.log(arrayDiff([1, 2], [1]));