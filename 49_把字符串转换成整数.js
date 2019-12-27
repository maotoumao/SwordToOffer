function StrToInt(str) {
    if (str === null || str.length === 0) {
        return 0;
    }
    // 判断是否有符号位
    let flag = 1;
    if (str[0] === '+') {
        str = str.slice(1);
    } else if (str[0] === '-') {
        flag = -1;
        str = str.slice(1);
    } else if (isNaN(str[0] - '0')) {
        return 0;
    }

    let result = 0;
    let curr;
    for (let i = str.length - 1; i >= 0; --i) {
        curr = str[i] - '0';
        if (isNaN(curr)){
            return 0;
        }
        result += (curr * 10 ** (str.length - i - 1));
    }
    return result * flag;
}

console.log(StrToInt('1a33'))