function LeftRotateString(str, n)
{
    if(str === null){
        return '';
    }
    return str.slice(n) + str.slice(0, n);
}

console.log(LeftRotateString('abcXYZdef', 3))