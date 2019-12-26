/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot)
{
    // xie de tai ma fan le bu neng zhe yang
    // 先序遍历
    let stack = [pRoot];
    let top;
    if(pRoot=== null){
        return true;
    }
    while(stack.length !== 0){
        top = stack.shift();
        if(top.left !== null){
            stack.push(top.left);
        }
        if(top.right !== null){
            stack.push(top.right);
        }
        if(Math.abs(dfs(top.left) - dfs(top.right)) > 1){
            return false;
        }
    }
    return true;
}

function dfs(root){
    if(root === null){
        return 0;
    }
    let left = dfs(root.left);
    let right = dfs(root.right);
    return Math.max(left, right) + 1;
}