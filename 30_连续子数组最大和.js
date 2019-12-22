function FindGreatestSumOfSubArray(array)
{
    if(array === null){
        return null;
    }
    if(array.length == 0){
        return 0;
    }
    if(array.length == 1){
        return array[0];
    }

    let dp = [array[0]];
    for(let i = 1; i < array.length; ++i){
        dp.push(Math.max(array[i], dp[i-1] + array[i]));
    }
    return Math.max(...dp);


}