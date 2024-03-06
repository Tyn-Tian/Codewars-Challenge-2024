function maskify(cc) {
  return cc
    .split("")
    .map((n, i) => {
      return i >= cc.length - 4 ? n : "#";
    })
    .join("");
}

// Top answer sort by best pratice
// function maskify(cc) {
//   return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
// }

console.log(maskify("4556364607935616"));
console.log(maskify("1"));
console.log(maskify("11111"));
