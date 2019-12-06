function jumpFloor(number) {
    if (number === 1) {
        // 如果是1个台阶
        return 1;
    }
    else if (number === 2) {
        // 如果是2个台阶
        return 2;
    }
    else {
        // 如果是很多台阶
        // 最后剩下一个台阶，一种，最后剩下两个台阶，两种，但是一种是第一次的
        return jumpFloor(number - 1) + jumpFloor(number - 2);
    }
}

console.log(jumpFloor(3));