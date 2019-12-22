function PrintMinNumber(numbers)
{
    // 排序 没想到
    if(numbers === null){
        return null;
    }
    if(numbers.length === 0){
        return '';
    }
    let strNums = numbers.map((v) => `${v}`);
    strNums.sort((a, b) => Number.parseInt(a + b) > Number.parseInt(b + a));
    return Number.parseInt(strNums.join(''));
}