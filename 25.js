function accum(strings) {
  let string = "";
  strings
    .toUpperCase()
    .split("")
    .map((str, i) => {
      string += str;
      for (let j = 0; j < i; j++) {
        string += str.toLowerCase();
      }
      i != strings.length - 1 ? (string += "-") : "";
    });

  return string;
}

// Top answer sort by best practice
// function accum(strings) {
// 	return strings.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }

console.log(accum("ZpglnRxqenU"));
console.log(accum("NyffsGeyylB"));
console.log(accum("MjtkuBovqrU"));
