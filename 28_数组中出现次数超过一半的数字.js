function MoreThanHalfNum_Solution(numbers) {
    if (numbers.length < 1) {
        return 0;
    }
    // 打擂算法
    let count = 1;
    let master = numbers[0];
    for (let i = 1; i < numbers.length; ++i) {
        if (numbers[i] === master) {
            ++count;
        } else {
            --count;
        }
        if (count === 0) {
            count = 1;
            master = numbers[i];
        }
    }
    if (numbers.filter(val => val === master).length > numbers.length / 2) {
        return master;
    }
    return 0;
}

console.log(MoreThanHalfNum_Solution([1, 2, 3, 2, 2, 2, 5, 4, 2]));