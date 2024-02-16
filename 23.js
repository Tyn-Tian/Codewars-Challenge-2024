// Top answer sort by best practice
// I can't answer this question
function duplicateEncode(word) {
    return word
        .toLowerCase()
        .split('')
        .map((a, i, w) => {
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
        })
        .join('');
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));