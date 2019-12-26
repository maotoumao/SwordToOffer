/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function TreeDepth(pRoot)
{
    return dfs(pRoot);
}

function dfs(root){
    if(root === null){
        return 0;
    }
    let left = dfs(root.left);
    let right = dfs(root.right);
    return Math.max(left, right) + 1;
}