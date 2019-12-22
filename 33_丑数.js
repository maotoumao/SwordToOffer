function GetUglyNumber_Solution(index) {
    if (index < 1) {
        return 0;
    }
    let two = [];
    let three = [];
    let five = [];
    let [p2, p3, p5] = [0, 0, 0];
    let unCurr = 1;
    for (let i = 1; i < index; ++i) {
        // 把当前的丑数乘以235加入最后
        two.push(unCurr * 2);
        three.push(unCurr * 3);
        five.push(unCurr * 5);

        // 选择第一个最小的丑数
        unCurr = Math.min(two[p2], three[p3], five[p5]);
        // 避免重复
        if (unCurr === two[p2]) {
            p2++;
        }
        if (unCurr === three[p3]) {
            p3++;
        }
        if (unCurr === five[p5]) {
            p5++;
        }
    }
    return unCurr;
}
for (let i = 1; i < 15; ++i) {
    console.log(GetUglyNumber_Solution(i));
}