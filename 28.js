function XO(str) {
    let x = 0
    let o = 0
    str.toLowerCase().split('').map(n => {
        n == 'x' ? x += 1 : ''
        n == 'o' ? o += 1 : ''
    })
    return x == o ? true : false
}

// Top answer sort by best pratices
// function XO(str) {
//     let x = str.match(/x/gi);
//     let o = str.match(/o/gi);
//     return (x && x.length) === (o && o.length);
// }

console.log(XO("xo"))
console.log(XO("xxOo"))
console.log(XO("xxxm"))
console.log(XO("Oo"))
console.log(XO("ooom"))
console.log(XO("zpzpzpp"))