function highAndLow(numbers) {
    const removeSpace = numbers.split(" ")
    return `${Math.max(...removeSpace)} ${Math.min(...removeSpace)}`
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
