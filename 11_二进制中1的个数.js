function NumberOf1(n)
{
    // 注意：!== 优先级比&高
    let count = 0;
    let flag = 1;
    while (flag !== 0){
        if((flag & n) !== 0){
            count += 1;
        }
        flag = flag << 1
    }
    return count;
}

console.log(NumberOf1(10));