function order(words) {
  if (words.length == 0) {
    return ''
  }

  let result = [];
  let order = 0;
  const regex = /\d+/g;

  words.split(" ").map((word) => {
    order = parseInt(word.match(regex).join(""));
    result.push([word, order]);
  });

  result.sort((a, b) => a[1] - b[1]);

  return result.map((items) => items[0]).join(" ");
}

// Top answer sort by best practice 
// function order(words){
//   return words.split(' ').sort(function(a, b){
//       return a.match(/\d/) - b.match(/\d/);
//   }).join(' ');
// } 

console.log(order("is2 Thi1s T4est 3a"));
