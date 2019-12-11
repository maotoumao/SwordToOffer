/**
 * 牛客网的题目描述是返回yes或no，但是实际用例中验证的是true和false
 */

function VerifySquenceOfBST(sequence) {
    // 二叉搜索树：左子树<根节点<右子树
    // 后序遍历：先左子树，再右子树，最后根节点
    if (sequence === null || sequence.length === 0) return 'No';
    return isBST(sequence) ? 'Yes' : 'No';
}

function isBST(tree) {
    // 如果没有结点或者只有一个结点，那意味着查找结束
    if (tree.length < 1) return true;
    // 否则，需要判断其左子树和右子树
    let root = tree.slice(-1);
    // 正常情况下，从左往右第一个比root大的结点之后是右子树
    let bound = tree.findIndex((x) => x > root);
    let left, right;
    if (bound === -1) {
        // 如果没有找到
        left = tree.slice(0, tree.length - 1);
        right = []
    }
    else {
        left = tree.slice(0, bound);
        right = tree.slice(bound, tree.length - 1);
        // 如果出现乱序
        if (Math.min(...right) < root) return false;
    }


    // 如果否则是有序的，判断其左子树和右子树是否满足关系
    return isBST(left) && isBST(right);
}
console.log(VerifySquenceOfBST([1,2,3,4,6,5]))
console.log(VerifySquenceOfBST([7,4,6,5]))