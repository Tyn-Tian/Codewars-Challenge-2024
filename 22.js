function duplicateCount(text) {
    let count = 0
    let temp = ''
    const arrText = text.toLowerCase().split('').sort()
    for (let i = 0; i < arrText.length; i ++) {
        temp != arrText[i] ? temp = arrText[i] : temp != arrText[i + 1] ? count++ : ""
    }

    return count
}

// Top answer sort by best practice
// function duplicateCount(text){
//     return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
// }

console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("Indivisibilities"));