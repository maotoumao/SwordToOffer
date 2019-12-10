/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
    // write code here
    if(root === null){
        return null;
    }
    [root.left, root.right] = [root.right, root.left];
    Mirror(root.left);
    Mirror(root.right);
    return root;
}