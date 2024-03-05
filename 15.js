function spinWords(string) {
  return string
    .split(" ")
    .map((str) => {
      return str.length >= 5 ? str.split("").reverse().join("") : str;
    })
    .join(" ");
}

console.log(spinWords("Welcome"));
console.log(spinWords("Hey fellow warriors"));
