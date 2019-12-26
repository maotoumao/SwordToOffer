function GetNumberOfK(data, k) {
    // 二分法查找， 题目说的有序是正序 也就是12345
    if (data === null) {
        return null;
    }
    let [l, r] = [getLowerBound(data, k), getUpperBound(data, k)];
    return r - l;
}

function getUpperBound(data, k) {
    let [left, right] = [0, data.length - 1];
    let mid = Math.floor((left + right) / 2);
    while (left <= right) {
        if (data[mid] <= k) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        mid = Math.floor((left + right) / 2);
    }
    return left;
}

function getLowerBound(data, k) {
    let [left, right] = [0, data.length - 1];
    let mid = Math.floor((left + right) / 2);
    while (left <= right) {
        if (data[mid] >= k) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
        mid = Math.floor((left + right) / 2);

    }
    return right + 1;
}

console.log(GetNumberOfK([ 3, 3, 3, 3,], 3));