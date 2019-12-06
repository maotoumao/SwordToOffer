function jumpFloorII(number)
{
    // 相当于在每一层都可能直接跳到终点
    return 2 ** (number - 1);
}