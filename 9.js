function dismvowel(str) {
    return str.split('').filter(n => !n.match(/[aeiouAEIOU]/)).join('')
}

// Top Answer sort by Best Practices
// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, '');
// }

console.log(dismvowel("This Website is for losers LOL!"))