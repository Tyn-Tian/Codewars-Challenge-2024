function likes(names) {
  switch (names.length >= 0) {
    case names.length <= 1:
      return `${names.length != 0 ? names : "no one"} likes this`;
    case names.length >= 4:
      const twoFirstName = names.slice(0, 2);
      return `${twoFirstName.join(", ")} and ${
        names.length - 2
      } others like this`;
    default:
      const lastName = names.pop();
      return `${names.join(", ")} and ${lastName} like this`;
  }
}

// Top Answer sort by Best Practice
// function likes(names) {
//     names = names || [];
//     switch (names.length) {
//         case 0: return 'no one likes this';
//         case 1: return names[0] + ' likes this';
//         case 2: return names[0] + ' and ' + names[1] + ' like this';
//         case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
//         default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//     }
// }

console.log(likes([]));
console.log(likes(["Peters"]));
console.log(likes(["Peters", "Jacob"]));
console.log(likes(["Peters", "Jacob", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
