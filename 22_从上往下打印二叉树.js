/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root) {
    let queue = [];
    let ans = [];
    if (root !== null) queue.push(root);
    let top;
    while (queue.length !== 0) {
        top = queue.shift();
        ans.push(top.val);
        if (top.left !== null) queue.push(top.left);
        if (top.right !== null) queue.push(top.right);
    }
    return ans;
}