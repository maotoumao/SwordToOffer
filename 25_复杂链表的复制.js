/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/
function Clone(pHead)
{
    // 参考的别人的思路 自己想的就是直接使用map记录下来
    // 先将自身复制一遍
    if(pHead === null){
        return null;
    }
    let curr = pHead;
    let newNode = null;
    while(curr !== null){
        newNode = new RandomListNode(curr.label);
        newNode.next = curr.next;
        curr.next = newNode
        curr = newNode.next;
    }

    curr = pHead;
    while(curr !== null){
        curr.next.random = curr.random;
        curr = curr.next.next;
    }

    curr = pHead;
    let newHead = curr.next;
    let newCurr = newHead;
    while(newCurr.next !== null){
        curr.next = newCurr.next;
        curr = curr.next;
        newCurr.next = curr.next;
        newCurr = newCurr.next;
    }
    return newHead;

}