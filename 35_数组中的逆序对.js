/*
看一下用例就知道 这样写肯定会超时
function InversePairs(data) {
    if (data === null) {
        return null;
    }
    if (data.length < 1) {
        return 0;
    }

    let count = 0;
    for (let i = 0; i < data.length - 1; ++i) {
        for (let j = i + 1; j < data.length; ++j) {
            if (data[i] > data[j]) {
                ++count;
            }
        }
    }
    return count % 1000000007;
}

*/

let count = 0;
function InversePairs(data) {
    if (data === null || data.length < 1) {
        return 0;
    }

    // 归并排序
    mergeSort(data, 0, data.length);
    return count;


}

function mergeSort(data, start, end) {
    let mid = Math.ceil((start + end) / 2);
    // 如果相等直接返回
    if (end === mid) {
        return;
    } else {
        mergeSort(data, start, mid);
        mergeSort(data, mid, end);
        merge(data, start, mid, end);
    }
}

function merge(arr, start, mid, right) {
    let temp = [];
    let [l, r] = [start, mid];
    // 每个子部分都是有序的
    while (l < mid && r < right) {
        if (arr[l] > arr[r]) {
            // 如果左侧大于右侧, 证明存在逆序对,右侧结点和任意该结点之后的结点都有逆序关系
            count = (count + (mid - l)) % 1000000007;
            temp.push(arr[r++]);
        }else{
            temp.push(arr[l++]);
        }
    }
    while (l < mid) {
        temp.push(arr[l++]);
    }
    while (r < right) {
        temp.push(arr[r++]);
    }

    // 复制过去
    for (let i = 0; i < temp.length; ++i) {
        arr[start + i] = temp[i];
    }


}

console.log(InversePairs([1, 2, 3, 4, 5, 6, 7, 0]))