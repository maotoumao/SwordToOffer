// 在一个二维数组中（每个一维数组的长度相同），
// 每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
function Find(target, array) {
    let row = array.length;
    let column = array[0].length
    let result = false;
    for (let i = row - 1; i >= 0; --i) {
        // 从下往上找，如果比这列第一个元素大，就说明在右边，否则去上一层找
        if (target >= array[i][0]) {
            for (let j = 0; j < column; ++j) {
                if (target === array[i][j]) {
                    return true;
                }
            }
        }
    }
    return result;

}