function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
function HasSubtree(pRoot1, pRoot2)
{
    if(pRoot1 === null || pRoot2 === null){
        return false;
    }
    // 对于pRoot1中的每一个结点，验证是否p2是它的子结构
    let queue = [pRoot1];
    let curr;
    while(queue.length !== 0){
        curr = queue.shift();
        if(isSameTree(curr, pRoot2)){
            return true;
        }
        if(curr.left !== null){
            queue.push(curr.left);
        }
        if(curr.right !== null){
            queue.push(curr.right);
        }
    }
    return false;
}

function isSameTree(r1, r2){
    if(r2 === null){
        // 如果子结构的某一个结点是空，那就说明匹配上了，无论A是什么
        return true;
    }
    if(r1 === null){
        // 如果要匹配的子结构不是空，但是A树空了，那就证明没有匹配上
        return false;
    }
    // 如果都不是空，值不同，则没有匹配上
    if(r1.val !== r2.val){
        return false;
    }
    // 如果值相同，则判断左子树和右子树是否相同
    // 如果左子树不相同或者右子树不相同
    if (!isSameTree(r1.left, r2.left) || !isSameTree(r1.right, r2.right)){
        return false; 
    }
    // 剩下完全相同的情况
    return true;
}

let root = new TreeNode(3);
root.left = new TreeNode(4);
root.left.left = new TreeNode(1);
root.left.left.left = new TreeNode(11);
root.left.left.right = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right = new TreeNode(5);
root.right.left = new TreeNode(2);
root.right.right = new TreeNode(8);

let p = new TreeNode(4);
p.left = new TreeNode(1);
p.right = new TreeNode(2);
console.log(HasSubtree(root, p))