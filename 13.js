function getMiddle(s) {
    if (s.length % 2 == 0) {
        return `${s[s.length / 2 - 1]}${s[s.length / 2]}`
    } else {
        return s[(s.length - 1) / 2] 
    }
}

// Top Answer sort by Best Practices
// function getMiddle(s){
//     return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }

console.log(getMiddle('test'));
console.log(getMiddle('testing'));
