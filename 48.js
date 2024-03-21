function openOrSenior(data) {
  return data.map((n) => (n[0] >= 55 && n[1] > 7 ? "Senior" : "Open"));
}

// Top Answer sort by best practice
function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? "Senior" : "Open"
  );
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
