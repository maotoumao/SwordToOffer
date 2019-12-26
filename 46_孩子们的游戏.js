function LastRemaining_Solution(n, m) {
    if (n <= 0) {
        return -1;
    }
    if (n == 1) {
        return 0;
    }
    if (m <= 0) {
        return -1;
    }
    // 小朋友
    let children = [];
    for (let i = 0; i < n; ++i) {
        children.push(i);
    }

    let curr = 0;
    while (children.length > 1) {
        curr = (curr + m - 1) % children.length;   
        children.splice(curr, 1);    
        curr %= children.length;

    }

    // 剩下那一个
    return children[0];
}

console.log(LastRemaining_Solution(8, 3));