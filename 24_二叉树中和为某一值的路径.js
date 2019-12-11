/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber) {
    let result = [];
    if (root === null) return result;
    transNext(root, [], 0, expectNumber, result);
    return result;
}


// 输入：当前结点和历史记录值
function transNext(currNode, path, currVal, expectNumber, result) {
    currVal += currNode.val;

    path.push(currNode.val);
    //如果子树是空的
    if (currVal === expectNumber && currNode.left === null && currNode.right === null) {
        // 要不然path会覆盖掉
        result.push(path.slice(0));
    }

    if (currNode.left !== null) {
        transNext(currNode.left, path, currVal, expectNumber, result);
    }

    if (currNode.right !== null) {
        transNext(currNode.right, path, currVal, expectNumber, result);
    }

    // 结束后返回上一层，需要删除path的最后一个元素
    path.pop();
}