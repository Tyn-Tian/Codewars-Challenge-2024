function findOutlier(integers) {
    const oddInt = []
    const evenInt = []
    integers.map(int => (int % 2 == 0) ? evenInt.push(int) : oddInt.push(int))

    return (oddInt.length == 1) ? parseInt(oddInt) : parseInt(evenInt)
}

console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));