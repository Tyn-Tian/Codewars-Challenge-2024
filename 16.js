// Top Answer sort by Best Practices
// I can't answer this question 
function findOdd(A) {
    return A.reduce((a, b) => a ^ b);
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
