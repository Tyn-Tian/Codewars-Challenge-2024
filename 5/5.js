function solution(str) {
  let reversedStr = "";
  for (n in str) {
    reversedStr += str[str.length - 1 - n];
  }
  return reversedStr;
}

// Top Answer sort by Best Practices
// function solution(str){
//     return str.split('').reverse().join('');
// }

console.log(solution("world"));
console.log(solution("word"));
