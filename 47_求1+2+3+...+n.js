function Sum_Solution(n) {
    // 那就递归呗
    return n && (n + Sum_Solution(n - 1));
}

console.log(Sum_Solution(10))