function NumberOf1Between1AndN_Solution(n)
{
    let str = ``;
    for(let i = 1; i <= n; ++i){
        str += `${i}`;
    }
    let ones = str.match(/1/g);
    return ones === null ? 0 : ones.length;

}
console.log(NumberOf1Between1AndN_Solution(13));