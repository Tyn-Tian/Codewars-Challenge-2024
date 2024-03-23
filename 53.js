function printerError(s) {
  let regex = /[^a-mA-M]/g;

  const err = s.split("").filter((n) => {
    return n.match(regex);
  }).length;

  return `${err}/${s.length}`;
}

console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
);
