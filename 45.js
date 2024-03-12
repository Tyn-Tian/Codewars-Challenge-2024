function countSheeps(sheep) {
  let result = 0;
  sheep.map((n) => (n == true ? result++ : ""));
  return result;
}

// Top answer sort by best practice
// function countSheeps(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
// }
