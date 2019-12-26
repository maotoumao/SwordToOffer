/*
    写错了 下边的是输出乘积最大的a
function FindNumbersWithSum(array, sum) {
    // 从S/2开始左右找
    let [left, right] = [0, array.length - 1];
    let mid;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (array[mid] < (sum / 2)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    for (let i = left - 1; i >= 0; --i) {
        if (array.indexOf(sum - array[i]) != -1) {
            return [array[i], sum - array[i]];
        }
    }
    return [];
}
*/
function FindNumbersWithSum(array, sum) {
    for (let i = 0; array[i] < (sum / 2); ++i) {
        if (array.indexOf(sum - array[i]) != -1) {
            return [array[i], sum - array[i]];
        }
    }
    return [];
}

console.log(FindNumbersWithSum([1, 2, 4, 7, 11, 15], 15))