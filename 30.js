function alphabetPosition(text) {
  return text
    .toUpperCase()
    .split("")
    .filter((n) => {
      const wordPosition = n.charCodeAt(0) - 64;
      return wordPosition > 0 && wordPosition < 27 ? n : "";
    })
    .map((n) => {
      const wordPosition = n.charCodeAt(0) - 64;
      return wordPosition > 0 && wordPosition < 27 ? wordPosition : "";
    })
    .join(" ");
}

// Top answer sort by best practices
// function alphabetPosition(text) {
//   var result = "";
//   for (var i = 0; i < text.length; i++) {
//     var code = text.toUpperCase().charCodeAt(i);
//     if (code > 64 && code < 91) result += code - 64 + " ";
//   }

//   return result.slice(0, result.length - 1);
// }

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("The narwhal bacons at midnight."));
