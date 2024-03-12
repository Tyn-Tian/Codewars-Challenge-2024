function dnaStrand(dna) {
  return dna
    .split("")
    .map((n) => {
      switch (n) {
        case "A":
          return "T";
        case "T":
          return "A";
        case "G":
          return "C";
        case "C":
          return "G";
      }
    })
    .join("");
}

console.log(dnaStrand("AAA"));
console.log(dnaStrand("ATTGC"));
console.log(dnaStrand("GTAT"));
