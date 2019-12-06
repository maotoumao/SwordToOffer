function minNumberInRotateArray(rotateArray) {
    // write code here
    let [head, tail] = [0, rotateArray.length - 1];
    let mid;
    while (head < tail) {
        if (rotateArray[head] < rotateArray[tail]) {
            // 证明处于增加段
            return rotateArray[head];
        }
        // 处于中间
        mid = Math.floor((tail + head) / 2);
        if (rotateArray[head] > rotateArray[mid]) {
            tail = mid;
        } else if (rotateArray[head] < rotateArray[mid]) {
            head = mid;
        } else {
            head += 1;
        }
        console.log(head, tail, mid)

    }
    return rotateArray[head];

}
