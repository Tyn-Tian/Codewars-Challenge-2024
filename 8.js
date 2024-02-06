function getCount(str) {
    return str.split('').filter(n => n == 'a' || n == 'e' || n == 'i' || n == 'o' || n == 'u').length
}

// Top Answer sort by Best Practices
// function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
// }

console.log(getCount('abracadabra'))