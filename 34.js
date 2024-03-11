function solution(str, ending) {
  return str.slice(str.length - ending.length, str.length) == ending
    ? true
    : false;
}

// Top answer sort by best practice
// function solution(str, ending){
//     return str.endsWith(ending);
// }

console.log(solution("abcde", "cde"));
console.log(solution("abcde", "abc"));
console.log(solution("samurai", "ai"));
