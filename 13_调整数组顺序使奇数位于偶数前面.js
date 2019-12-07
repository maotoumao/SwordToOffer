function reOrderArray(array) {
    // write code here
    let odd = array.filter((item) => item % 2);
    let even = array.filter((item) => item % 2 === 0)
    return [...odd, ...even];
}

console.log(reOrderArray([1, 2, 3, 4, 5, 6, 7]))