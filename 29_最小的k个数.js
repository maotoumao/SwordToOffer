function GetLeastNumbers_Solution(input, k) {
    if (input === null) {
        return null;
    }
    return input.length < k ? [] : input.sort().slice(0, k);
}