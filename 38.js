function isValidWalk(walk) {
  if (walk.length == 10) {
    let location = 0;
    walk.map((n) => {
      switch (n) {
        case "n":
          location += 2;
          break;
        case "s":
          location -= 2;
          break;
        case "w":
          location += 1;
          break;
        case "e":
          location -= 1;
          break;
        default:
          break;
      }
    });
    return location == 0 ? true : false;
  }
  return false;
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
);
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
