function FindContinuousSequence(sum) {
    let high = Math.ceil(sum / 2);
    let ans = [];
    let series;
    for (let i = 1; i < high; ++i) {
        series = hasSeries(i, sum);
        if (series !== null) {
            ans.push(series);
        }
    }
    return ans;
}

// 判断是否从k向上加存在满足条件的序列
function hasSeries(k, sum) {
    let series = [k];
    let curr = k;
    let sumSeries = k;
    while (sumSeries < sum) {
        sumSeries += (++curr);
        series.push(curr);
    }
    if (sumSeries === sum) {
        return series;
    }
    return null;
}
console.log(FindContinuousSequence(100));