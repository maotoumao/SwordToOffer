function IsContinuous(numbers) {
    if (numbers === null) {
        return null;
    }

    let cards = new Array(13);
    for (let i = 0; i < 13; ++i) {
        cards[i] = 0;
    }
    // 0的个数
    let zeros = numbers.filter((v) => v === 0).length;
    for (let i = 0; i < numbers.length; ++i) {
        cards[numbers[i] - 1] = 1;
    }
    // 从0开始 到9
    for (let i = 0; i < 9; ++i) {
        if (zeros + cards[i] + cards[i + 1] + cards[i + 2] + cards[i + 3] + cards[i + 4] === 5) {
            return true;
        }
    }
    return false;

}

console.log(IsContinuous([1,3,2,5,4]))