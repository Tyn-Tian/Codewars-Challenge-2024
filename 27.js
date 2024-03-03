function isIsogram(str) {
    str == '' ? true : ''
    const lowerStr = str.toLowerCase()
    for (let i = 0; i < str.length; i++) {
        if (lowerStr.indexOf(str[i]) != lowerStr.toLowerCase().lastIndexOf(str[i])) {
            return false
        }
    }
    return true
}

// Top answer sort by best pratices
// function isIsogram(str){
// 	return new Set(str.toUpperCase()).size == str.length;
// }

console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("isogram"))
console.log(isIsogram("aba"))
console.log(isIsogram("moOse"))
console.log(isIsogram("isIsogram"))
console.log(isIsogram(''))