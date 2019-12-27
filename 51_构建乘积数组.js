function multiply(array)
{
    if(array === null){
        return null;
    }
    let zhengxucheng = new Array(array.length);
    zhengxucheng[0] = array[0];
    let nixucheng = new Array(array.length);
    nixucheng[array.length - 1] = array[array.length - 1];
    for(let i = 1; i < array.length - 1; ++i){
        zhengxucheng[i] = zhengxucheng[i - 1] * array[i];
        nixucheng[array.length - 1 - i] = nixucheng[array.length - i] * array[array.length - 1 - i];
    }

    let b = new Array(array.length);
    b[0] = nixucheng[1];
    b[array.length - 1] = zhengxucheng[array.length - 2];
    for(let i = 1; i < array.length - 1; ++i){
        b[i] = zhengxucheng[i - 1] * nixucheng[i + 1];
    }
    return b;

}