function removeChar(str) {
  return str.slice(1, str.length - 1);
}

// Top answer sort by best pratice
// function removeChar(str) {
//     return str.slice(1, -1)
// }

console.log(removeChar("eloquent"));
console.log(removeChar("country"));
console.log(removeChar("person"));
