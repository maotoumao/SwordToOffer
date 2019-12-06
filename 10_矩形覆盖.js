function rectCover(number)
{
    // 这样子会报内存错误，因为用例有2*0的大矩阵，有0种方法。。。。
    // 竖着放：一种 横着放：一种
    if(number === 1){
        // 只能竖着放
        return 1;
    }
    else if(number === 2){
        // 可以横着放
        return 2;
    }
    return rectCover(number - 1) + rectCover(number - 2);
}

console.log(rectCover(15));