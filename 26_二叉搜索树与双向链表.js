/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert(pRootOfTree) {
    // 如果左右子节点不是叶子结点那么需要不断的往下遍历
    if (pRootOfTree === null) {
        return null;
    }
    // 先遍历再改
    let arr = transversal(pRootOfTree);
    arr[0].right = arr[1];
    for (let i = 1; i < arr.length - 1; ++i) {
        arr[i].left = arr[i - 1];
        arr[i].right = arr[i + 1];
    }
    arr[arr.length - 1].left = arr[arr.length - 2];
    return arr[0];
}

function transversal(root) {
    if (root === null) {
        return [];
    }
    if (root.left === null && root.right === null) {
        return [root];
    }
    return [...transversal(root.left), root, ...transversal(root.right)];

}