/**
 * 忽略pre为空的情况
 * 根节点：先序遍历的第一个结点
 * 按照根节点的划分中序遍历： 左子树 右子树
 * 
 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function reConstructBinaryTree(pre, vin) {
    if (pre.length === 0) {
        return null;
    }
    let root = new TreeNode(pre[0]);
    let leftSubtreeVin = vin.slice(0, vin.indexOf(pre[0]));
    let rightSubtreeVin = vin.slice(vin.indexOf(pre[0]) + 1);
    let leftSubtreePre = pre.slice(1, 1 + leftSubtreeVin.length);
    let rightSubtreePre = pre.slice(1 + leftSubtreeVin.length);
    root.left = reConstructBinaryTree(leftSubtreePre, leftSubtreeVin);
    root.right = reConstructBinaryTree(rightSubtreePre, rightSubtreeVin);
    return root;

}

console.log(reConstructBinaryTree([1, 2, 4, 7, 3, 5, 6, 8], [4, 7, 2, 1, 5, 3, 8, 6]));