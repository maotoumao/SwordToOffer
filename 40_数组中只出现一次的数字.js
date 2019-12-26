function FindNumsAppearOnce(array)
{
    let sortedArray = array.sort();
    let result = [];
    for(let curr = 0; curr < array.length; ++curr){
        if(sortedArray[curr] !== sortedArray[curr +1]){
            result.push(sortedArray[curr]);
        }else{
            ++curr;
        }
    }
    return result;
}