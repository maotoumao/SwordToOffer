function Add(num1, num2)
{
    if(num1 === null || num2 === null){
        return null;
    }
    if(num1 === 0){
        return num2;
    }
    if(num2 === 0){
        return num1;
    }
    return Add(num1 ^ num2, (num1 & num2) << 1);
}